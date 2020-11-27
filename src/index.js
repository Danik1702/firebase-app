import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAb2DA-jBjkLzuPGMSVmGgE2I9-evrNVQU",
  authDomain: "fir-app-5cde0.firebaseapp.com",
  databaseURL: "https://fir-app-5cde0.firebaseio.com",
  projectId: "fir-app-5cde0",
  storageBucket: "fir-app-5cde0.appspot.com",
  messagingSenderId: "805435247789",
  appId: "1:805435247789:web:9271c6e20ebad2be7d0a24",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
