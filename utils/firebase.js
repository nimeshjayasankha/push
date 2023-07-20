import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyB-8k-PYuYvOcLMKG8dcpXLe5Rok_uOQNk",
        authDomain: "push-notification-881ed.firebaseapp.com",
        projectId: "push-notification-881ed",
        storageBucket: "push-notification-881ed.appspot.com",
        messagingSenderId: "968885877073",
        appId: "1:968885877073:web:aa4910079cf75791cc3b70",
        measurementId: "G-N8P7PFK114",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey:
              "BP93C7WuTic-qeOk0s-BGxZBHXkYDmGEtvMoCuRJzi7PuOLLktk4Y0Pw1ym4u8bnO2GZ9rvcPP_aYB2iZw1yHag",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
