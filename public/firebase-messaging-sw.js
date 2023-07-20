importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB-8k-PYuYvOcLMKG8dcpXLe5Rok_uOQNk",
  authDomain: "push-notification-881ed.firebaseapp.com",
  projectId: "push-notification-881ed",
  storageBucket: "push-notification-881ed.appspot.com",
  messagingSenderId: "968885877073",
  appId: "1:968885877073:web:aa4910079cf75791cc3b70",
  measurementId: "G-N8P7PFK114",
});

const messaging = firebase.messaging();
