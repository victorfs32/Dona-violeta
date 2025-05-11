
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbZgvFqBe3XGw-K5Q9miaeJkFZD1pyNcM",
    authDomain: "meu-projeto-d2be3.firebaseapp.com",
    databaseURL: "https://meu-projeto-d2be3-default-rtdb.firebaseio.com",
    projectId: "meu-projeto-d2be3",
    storageBucket: "meu-projeto-d2be3.appspot.com",
    messagingSenderId: "500109951810",
    appId: "1:500109951810:web:40340326d64f3c29627edb"
  };

// 🔹 Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


