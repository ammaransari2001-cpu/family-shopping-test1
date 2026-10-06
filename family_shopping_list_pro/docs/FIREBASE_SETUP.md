# Firebase setup checklist

1. Create a Firebase project.
2. Add Android and iOS apps.
3. Enable Anonymous Authentication.
4. Enable Firestore.
5. Enable Cloud Messaging.
6. Run `flutterfire configure`.
7. Deploy Firestore rules.
8. Install and deploy `functions/`.
9. Android: verify Google Play services are available on target devices.
10. iOS: enable Push Notifications + Background Modes/Remote notifications and upload APNs key.

The app intentionally does not contain a hard-coded Firebase API configuration because those values belong to the owner's Firebase project.
