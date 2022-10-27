import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import AdminPage from '../AdminPage/AdminPage';

//TODO: This is where the component imports will go

//TODO GET Pizza's from server


//TODO POST method

function App() {

  return (
    <div className='App'>
    <Header/>
  
  <Router> 
    <div>
      
      <Route exact path = "/"> 
      <PizzaList/>
      </Route>
     
      <Route exact path = "/customerform">
        <CustomerForm/>
      </Route>

      <Route exact path = "/checkout">
        <CheckoutPage/>
      </Route>

      <Route exact path = "/admin">
        <AdminPage/>
      </Route>
      
    </div>
      </Router>
  
    </div>
  );
}

export default App;
