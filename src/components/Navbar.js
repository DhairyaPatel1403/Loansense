import React, {useContext, useState, useEffect} from 'react';
import './nav.css';
import { AuthContext } from '../context/Authcontext';
import 'firebase/compat/auth';
import { auth } from '../firebase';
import { addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { getDisplayName } from './Getthings';

export const Navbar = () => {

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





    
  return (
    <>
        <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#"><img src={process.env.PUBLIC_URL + '/ls.png'} alt="LoanSense Logo" width="40px" height="40px" style={{"border-radius":"70px"}}/></a>
        </div>
        <div className='logo-text'> &nbsp; LOANSENSE </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="Home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="account">View Account</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact</a>
          </li>

          <li className="navbar-item-name">
            {DisplayName}
          </li>

        </ul>


        

      </div>
    </nav>
    </>
  )
}
