import React, {useContext, useState, useEffect} from 'react';
import { Navbar } from './Navbar';
import { useSearchParams, useLocation  } from 'react-router-dom';
import { getDisplayName } from './Getthings';
import { AuthContext } from '../context/Authcontext';
import './loan.css';
import { auth, db } from "../firebase";
import { doc, setDoc, addDoc, collection, updateDoc, increment  } from "firebase/firestore"; 

export const Loan = ()  => {

    const {CurrentUser} = useContext(AuthContext);
    const [DisplayName, setDisplayName] = useState("");

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





      const handleSubmit=async (e)=>{

        e.preventDefault();




        const name = e.currentTarget.elements.name.value;
        const amt = e.currentTarget.elements.amount.value;

        const amount = parseInt(amt);


        //0-username
        //1-email
        //3-password


        try{
           try
            {
                await setDoc(doc(db, "loan", CurrentUser.uid), {
                    uid: CurrentUser.uid,
                    amount: amount,
                    loan_provider:"loanprovider1",
                    paid:0
                });

                  // Update the "loans" field in the "account" collection
                await updateDoc(doc(db, "account", CurrentUser.uid), {
                    loans: increment(1), // Increment the "loans" field by 1
                    balance:increment(amount)
                });


            console.log(CurrentUser.uid);
            console.log(amount);
        }
        catch(err){console.log(err);}

            console.log("setting doc error");
        } 
        
        catch(err){
            console.log(err);
        }

        window.location.href = '/Home';

    }
    

    
    

  


  return (
    <>

    <div className='homebody' style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{"marginBottom":"120px"}}>
            <Navbar style={{"marginBottom":"20px"}}/>
        </div>


    <div className='container' style={{ marginLeft: '450px' }}>
    <form className='ccc' onSubmit={handleSubmit}>
        <div>
            <span>Name</span><input type="text" placeholder="NAME" name="name" value={DisplayName} />
            <span>Amount</span><input type="text" placeholder="AMOUNT" name="amount" />
        </div>
        <span>*Notice that the amount should be paid under 8 months</span>

        <button type="submit">Submit</button>
    </form>
    </div>
    
  </div>





    </>
  )
}
