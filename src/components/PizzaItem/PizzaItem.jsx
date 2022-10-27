import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './PizzaItem.css';

function PizzaItem({pizza}) {
    const dispatch = useDispatch();

    const addCart = () => {
        console.log(pizza);
        // TODO: Dispatch here
        dispatch({
          type:'ADD_PIZZA_TO_CART',
          payload: {id, 
            name, 
            price
          }

      });
      }
    
    return (
        <div className = "items">
        <>
            <h2> {pizza.name}</h2>
            <p>{pizza.description}</p>
            <h4>${pizza.price}</h4>
            </>

            <button onClick ={addCart}>Add</button>

            

        </div>

    )
}

export default PizzaItem;