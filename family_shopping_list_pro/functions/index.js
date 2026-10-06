const { onDocumentWritten } = require('firebase-functions/v2/firestore');
const { getMessaging } = require('firebase-admin/messaging');
const { getFirestore } = require('firebase-admin/firestore');
const { initializeApp } = require('firebase-admin/app');
initializeApp();
const db = getFirestore();
exports.notifyFamilyListChanged = onDocumentWritten('families/{familyId}/lists/{listId}', async (event) => {
  const after = event.data?.after?.data();
  if (!after) return;
  const family = await db.doc(`families/${event.params.familyId}`).get();
  const members = family.data()?.memberIds || [];
  const sender = after.updatedBy;
  const ids = members.filter((x) => x && x !== sender);
  if (!ids.length) return;
  const users = await Promise.all(ids.map((uid) => db.doc(`users/${uid}`).get()));
  const tokens = users.map((s) => s.data()?.token).filter(Boolean);
  if (!tokens.length) return;
  await getMessaging().sendEachForMulticast({
    tokens,
    notification: { title: 'لیست خرید خانواده تست1', body: `لیست «${after.name || 'خرید'}» به‌روزرسانی شد.` },
    data: { familyId: event.params.familyId, listId: event.params.listId, type: 'shopping_list_updated' },
  });
});
