import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQrwDRuO-CDhYhDRiOvTZ_y0Zh8Q4pq2Q",
  authDomain: "jg-tax-professional-services.firebaseapp.com",
  projectId: "jg-tax-professional-services",
  storageBucket: "jg-tax-professional-services.firebasestorage.app",
  messagingSenderId: "706599095778",
  appId: "1:706599095778:web:1f79a6df385ef94ccabdbb",
  measurementId: "G-BNESZ4CSBG",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app);

// Initialize Firestore and Storage
const firestore = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services for use in your app
export { auth, firestore, storage };
export default firebaseConfig;
