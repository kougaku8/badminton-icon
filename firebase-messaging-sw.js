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
