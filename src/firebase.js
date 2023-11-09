// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBRQ7bvkwhzzW1DNc1sxGbePY7o-VZLQx8",
  authDomain: "todo-list-129a6.firebaseapp.com",
  projectId: "todo-list-129a6",
  storageBucket: "todo-list-129a6.appspot.com",
  messagingSenderId: "918992989071",
  appId: "1:918992989071:web:cc9a806a0dac83b03639fa",
  measurementId: "G-CM6C7VSFEY"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()