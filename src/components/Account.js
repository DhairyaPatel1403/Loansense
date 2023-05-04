import React, {useState, useContext, useEffect} from 'react'
import './account.css';
import { Navbar } from './Navbar';
import { AuthContext } from '../context/Authcontext';
import 'firebase/compat/auth';
import { auth } from '../firebase';
import { addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { getDisplayName, getAmount, getLoanNumber } from './Getthings';
import { DisplayLoan } from './DisplayLoan';

export const Account = () => {

  const {CurrentUser} = useContext(AuthContext);
  const [DisplayName, setDisplayName] = useState("");
  const [Amount, setAmount] = useState("");
  const [LoanNumber, setLoanNumber] = useState("");


  useEffect(() => {
    if (CurrentUser) {
      getDisplayName(CurrentUser.uid)
        .then((name) => {
          setDisplayName(name);
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }, [CurrentUser]);


  useEffect(() => {
    if (CurrentUser) {
      getAmount(CurrentUser.uid)
        .then((name) => {
          setAmount(name);
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }, [CurrentUser]);


  useEffect(() => {
    if (CurrentUser) {
      getLoanNumber(CurrentUser.uid)
        .then((name) => {
          setLoanNumber(name);
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }, [CurrentUser]);


  return (
    <>

        <div className='homebody' style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{"marginBottom":"120px"}}>
                    <Navbar style={{"marginBottom":"20px"}}/>
                </div>




                <div class="containerr">
                <div class="wrapper">
                <div class="banner-image"> </div>
                <h2>{DisplayName} account details</h2>
                <p>Amount -  {Amount}<br/>
                    Loans taken - {LoanNumber}</p>

                <div class="button-wrapper"> 
                <button class="btn outline">See Loan Offers</button>
                <button hidden class="btn fill"></button>
                </div>
                    </div>
                </div>
        <DisplayLoan/>
        </div>

    </>
  )
}
