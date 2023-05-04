import React, {useState, useContext, useEffect} from 'react'
import './account.css';
import { Navbar } from './Navbar';
import { AuthContext } from '../context/Authcontext';
import { db } from "../firebase";
import 'firebase/compat/auth';
import { auth } from '../firebase';
import { addDoc, setDoc, doc, getDoc, query, where, getDocs  } from 'firebase/firestore';
import { getDisplayName, getAmount, getLoanNumber } from './Getthings';
import {  collection, updateDoc, increment  } from "firebase/firestore"; 

export const DisplayLoan = () => {
    const {CurrentUser} = useContext(AuthContext);


    const [loans, setLoans] = useState([]);




    useEffect(() => {
        console.log(CurrentUser.uid);
        // Fetch loan documents for the current user
        const fetchLoans = async () => {
            try {
              if (CurrentUser && CurrentUser.uid) {
                const loansRef = collection(db, "loan");
                const q = query(loansRef, where("uid", "==", CurrentUser.uid));
                const querySnapshot = await getDocs(q);
                const loanData = querySnapshot.docs.map((doc) => doc.data());
                setLoans(loanData);
              } else {
                // Handle the case where CurrentUser or CurrentUser.uid is undefined or null
                console.error("CurrentUser or CurrentUser.uid is undefined or null.");
              }
            } catch (error) {
              console.error("Error fetching loan documents:", error);
            }
          };

            // Call the fetchLoans function
            fetchLoans();
        }, []);




        const paidSubmit = async (e) => {

            const amt = e.currentTarget.elements.amount.value;

            const amount = parseInt(amt);

            try {

                await updateDoc(doc(db, "account", CurrentUser.uid), {
                    balance:increment(-amount)
                });

                await updateDoc(doc(db, "loan", CurrentUser.uid), {
                    amount:increment(-amount),
                    paid:increment(amount)
                });
              
            } catch (error) {
              alert("Error paying loan", error);
            }
          };


        return (
            <>
            <center style={{"marginTop":"100px"}}>This may take a while...</center>
              {/* Display loan details */}
              {loans.map((loan) => (





                <div key={loan.uid}>
                    <div class="containerr">
                    <div class="wrapper">
                    <h2>Loan Details</h2>
                    <form onSubmit={paidSubmit} action='account'>
                                    <h3>Amount: {loan.amount}</h3>
                                    <h3>Loan Provider: {loan.loan_provider}</h3>
                                    <h3>Paid: {loan.paid}</h3>

                                    <input name="amount" type="text" placeholder='Pay amount...'></input>

                            <div class="button-wrapper"> 
                            <button class="btn fill" type="submit">Pay amount</button>
                            </div>
                            </form>
                    </div>
                    </div>
                    
                    
                </div>
              ))}
            </>
          );
}




