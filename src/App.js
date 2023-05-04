import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Account } from './components/Account';
import { Loan } from './components/Loan';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>


      <Router>
        <Routes>


        <Route exact path="/" element={<Login />} />


        <Route exact path="/Home" element={<Home />} >

        </Route>

        <Route exact path="/account" element={<Account />} />


        <Route exact path="/loan" element={<Loan />} />


          

        </Routes>
    </Router>



    </>
  );
}

export default App;
