import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './Header.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {

  const [total,setTotal] = useState(0);

  const pizzaPrices = useSelector((store) => store.cartPizzas.map((pizza) => pizza.price));
  const calcTotal = ()=>{ 
    return pizzaPrices.reduce((a, b) => a + b,0);
  } ;

  useEffect(()=>{
    setTotal(calcTotal);
    
  }, [useParams.id]);

  return (
    <>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <h4>Total:${total}</h4>
      </header>
    </>
  )
}



export default Header;