# لیست خرید خانواده تست1 — نسخه 3

اپلیکیشن فهرست خرید خانوادگی با رابط حرفه‌ای، سه زبان، چند لیست، دسته‌بندی کالاها، اعضای خانواده و تاریخچه خرید.

## امکانات نسخه 3
- فارسی، عربی و انگلیسی + RTL/LTR
- هویت بصری و لوگوی «لیست خرید خانواده تست1»
- صفحه ورود / ساخت حساب + ورود مهمان
- چند لیست خرید مستقل
- دسته‌بندی کالاها و آیکون اختصاصی هر دسته
- تعداد و وضعیت انجام‌شده
- تاریخچه لیست‌های تکمیل‌شده و بازگردانی
- پروفایل اعضای خانواده
- اتصال دستگاه با QR
- Firestore realtime synchronization
- Firebase Cloud Messaging Push Notification
- حالت محلی در صورت نبود Firebase
- Material 3، طراحی واکنش‌گرا و حالت تاریک

## راه‌اندازی
```bash
flutter pub get
flutterfire configure
flutter run
```

در Firebase، Authentication (Email/Password و Anonymous در صورت نیاز)، Firestore و Cloud Messaging را فعال کنید. سپس Rules را Deploy کنید و Cloud Function داخل `functions` را نیز Deploy نمایید.

> `lib/firebase_options.dart` نمونه است و تنظیمات پروژه واقعی شما را ندارد. برای پروژه واقعی آن را با `flutterfire configure` تولید کنید.


## نام برنامه
نام نمایشی برنامه: **لیست خرید خانواده تست1**

## ساخت APK اندروید
در این بسته workflow آمادهٔ GitHub Actions نیز قرار داده شده است. روی یک سیستم دارای Flutter می‌توانید `flutter pub get` و سپس `flutter build apk --release` را اجرا کنید.
