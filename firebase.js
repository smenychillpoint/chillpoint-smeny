import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  update
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKr7aM1WKKGy9nEQDA2LZYFrHy1v-zaC0",
  authDomain: "chillpoint-smeny.firebaseapp.com",
  databaseURL: "https://chillpoint-smeny-default-rtdb.firebaseio.com",
  projectId: "chillpoint-smeny",
  storageBucket: "chillpoint-smeny.firebasestorage.app",
  messagingSenderId: "162375439247",
  appId: "1:162375439247:web:01311acafe1607e03531fa"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.firebaseDb = db;
window.firebaseRef = ref;
window.firebaseSet = set;
window.firebaseGet = get;
window.firebaseOnValue = onValue;
window.firebaseUpdate = update;

console.log("Firebase pripravený");
