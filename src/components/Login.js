import React, {useEffect, useState} from 'react';
import 'firebase/compat/auth'
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { async } from '@firebase/util';
import { Navigate, BrowserRouter, Route, Switch  } from 'react-router-dom';
import './style.css';


export const Login = () => {

    const usercollectionref = collection(db, 'users')

    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');


    const handleSubmit=async (e)=>{

        e.preventDefault();

        setIsLoading(true); 




        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;

        //0-username
        //1-email
        //3-password


        try{
            const res = await createUserWithEmailAndPassword(auth, email, password); 

            


           try
            {
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    name: {name},
                    email:email,
                    password:password
                });


                await setDoc(doc(db, "account", res.user.uid), {
                    userid: res.user.uid,
                    balance:1000,
                    loans:0
                });


            console.log(res.user.uid);
            console.log(name);
        }
        catch(err){console.log(err);}

            console.log("setting doc error");
        } 
        
        catch(err){
            console.log(err);
        }

        setIsLoading(false);
        window.location.href = '/Home';

    }






    const handleSubmitLogin=async (e)=>{

        e.preventDefault();

        setIsLoading(true); 

        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;

        try{
          await signInWithEmailAndPassword(auth, email, password);
          window.location.href = '/Home';

          } catch(err){
              alert(err.message);
          }

    }






    useEffect(() => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');
      
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
      
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
      }, []);




  return (

    <>
      <div className='lgb'>
        
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit}>
              <h2>Create Account</h2>
              
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" name="email"/>
              <input type="password" placeholder="Password" name="password" />
              <button>Sign Up</button>
            </form>
          </div>



          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmitLogin}>
              <h2>Sign in</h2>
              <div className="social-container">
                
        
                
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h2>Hello, Friend!</h2>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>


        

      </div>


      

      
 
    </>
    
  )
}
