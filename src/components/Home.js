import React from 'react'
import { Navbar } from './Navbar'
import homeloans from './home loans.png';
import './homestyle.css';


export const Home = () => {



  return (

    <div className='homebody' style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{"marginBottom":"120px"}}>
            <Navbar style={{"marginBottom":"20px"}}/>
        </div>
        


        <div className="card-container" style={{"marginBottom":"70px"}}>


        <div>
            <form className="card" action="loan">
                <img src={homeloans} width="450px" height="200px" style={{"borderRadius":"0px"}}></img>
                <p>    
                At LoanSense, we understand that purchasing a home is one of the most important decisions you'll make in your life. That's why we offer a range of home loan options to help you make that dream a reality.

                Whether you're a first-time homebuyer, looking to upgrade to a larger home, or looking to refinance your current mortgage, we have the perfect solution for you. 

                
                </p>
                <input hidden name="loaner1" value="loaner1"></input>
                <button type="submit">View Details</button>
            </form>
        </div>
        


        <div>
            <form className="card" action="Loan">
                <img src={homeloans} width="450px" height="200px" style={{"borderRadius":"0px"}}></img>
                <p>    
                At LoanSense, we understand that purchasing a home is one of the most important decisions you'll make in your life. That's why we offer a range of home loan options to help you make that dream a reality.

                Whether you're a first-time homebuyer, looking to upgrade to a larger home, or looking to refinance your current mortgage, we have the perfect solution for you. 

                
                </p>
                <input hidden name="loaner2"></input>
                <button type="submit">View Details</button>
            </form>
        </div>



        <div>
            <form className="card" action="Loan">
                <img src={homeloans} width="450px" height="200px" style={{"borderRadius":"0px"}}></img>
                <p>    
                At LoanSense, we understand that purchasing a home is one of the most important decisions you'll make in your life. That's why we offer a range of home loan options to help you make that dream a reality.

                Whether you're a first-time homebuyer, looking to upgrade to a larger home, or looking to refinance your current mortgage, we have the perfect solution for you. 

                
                </p>
                <input hidden name="loaner3"></input>
                <button type="submit">View Details</button>
            </form>
        </div>

        <button className="button-paper" role="button" href="">View More</button>

        </div>

        



        

        <h1>
        <span>LOANSENSE</span>
        <div className="message">
            <div className="word1">Provide</div>
        </div>
        </h1>




        



        


    </div>
  )
}
