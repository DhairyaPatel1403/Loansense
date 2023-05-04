import { getDoc, doc, addDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore"; // Import necessary Firestore functions


export const getDisplayName = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.name;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {

  }
};


export const getAmount = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "account", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.balance;
    } else {
      throw new Error("Amount not found");
    }
  } catch (error) {

  }
};



export const getLoanNumber = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "account", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.loans || 0;
    } else {
      throw new Error("Amount not found");
    }
  } catch (error) {

  }
};


