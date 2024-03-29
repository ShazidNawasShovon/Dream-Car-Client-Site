import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAnalytics } from "firebase/analytics";
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
  getAnalytics(initializeApp(firebaseConfig))
};

export default initializeAuthentication;
