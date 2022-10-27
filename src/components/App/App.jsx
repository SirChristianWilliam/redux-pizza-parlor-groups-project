import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//TODO: This is where the component imports will go
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import AdminPage from '../AdminPage/AdminPage';



function App() {
  const dispatch = useDispatch();


// GET Pizza's from server
useEffect(() => {
  //onPageLoad...
    fetchPizzas();
  }, []);

  const fetchPizzas =() => {
    console.log('in fetchPizzas');
  
  
    axios ({
      method: 'GET',
      url:'/api/pizza'
    })
    .then((response) => {
      //This week...
      dispatch({//This is only when we're getting data 
        //from the server and putting it in redux.
        type:'SET_PIZZAS',
        payload:response.data
  
      });
    })
    .catch((err) => {
      console.error("Error in App.jsx GET", err)
    });
  }

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
