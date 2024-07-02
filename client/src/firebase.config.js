import { initializeApp, getApp, getApps, } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "restaurant-d1b16.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "restaurant-d1b16",
    storageBucket: "restaurant-d1b16.appspot.com",
    messagingSenderId: "819814547317",
    appId: "1:819814547317:web:537afe00c6ffc6d4f65d3c"
};

const app = getApps.length > 0 ? getApp() :  initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage}