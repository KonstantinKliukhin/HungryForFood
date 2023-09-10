import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import {getReactNativePersistence} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYtVUt6AyaXwF9EvdhoqoTYkxZRJhLTJ4",
  authDomain: "rnfood-65795.firebaseapp.com",
  projectId: "rnfood-65795",
  storageBucket: "rnfood-65795.appspot.com",
  messagingSenderId: "898828753409",
  appId: "1:898828753409:web:97db4eda40fd997ea97e00"
}

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {auth}
