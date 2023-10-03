// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: "bistro-boss-ba039.firebaseapp.com",
    projectId: "bistro-boss-ba039",
    storageBucket: "bistro-boss-ba039.appspot.com",
    messagingSenderId: "156592363039",
    appId: "1:156592363039:web:b878b0480bdce63407272a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;