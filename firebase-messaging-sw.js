importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD6uQto_5BYZJDgkaI8CBGaOQkXMgrCk",
  authDomain: "badminton-notification.firebaseapp.com",
  projectId: "badminton-notification",
  storageBucket: "badminton-notification.firebasestorage.app",
  messagingSenderId: "419794096766",
  appId: "1:419794096766:web:9dd990fe827719d149fe2f"
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {

  console.log(
    "[firebase-messaging-sw.js] Background message:",
    payload
  );

  const title =
    payload.notification &&
    payload.notification.title
      ? payload.notification.title
      : "🏸 羽球活動";

  const body =
    payload.notification &&
    payload.notification.body
      ? payload.notification.body
      : "新しい通知があります";


  self.registration.showNotification(
    title,
    {
      body: body,

      icon:
        "https://kougaku8.github.io/badminton-icon/heian-bado-yoyaku-icon_512.png",

      badge:
        "https://kougaku8.github.io/badminton-icon/heian-bado-yoyaku-icon_512.png",

      requireInteraction: false
    }
  );

});
