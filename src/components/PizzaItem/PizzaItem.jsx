import {useState} from "react";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import './PizzaItem.css';

function PizzaItem({pizza, cart}) {
  const [removeBtn, setRemoveBtn] = useState(false)
  const dispatch = useDispatch();
  const cartPizzas = useSelector(store => store.cartPizzas);

  


  const getRemove = () => {
    setRemoveBtn(!removeBtn)
    dispatch({
      type:'REMOVE_PIZZA_FROM_CART',
      payload: {id: pizza.id,
        name: pizza.name, 
        price: Number(pizza.price)
      }
      })

    
  
  }


    const addCart = () => {
        console.log(pizza);
        // TODO: Dispatch here
        dispatch({
          type:'ADD_PIZZA_TO_CART',
          payload: {id: pizza.id,
            name: pizza.name, 
            price: Number(pizza.price)
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

     

            {cartPizzas.map((cart, i) => {
          return <button key = {i} cart ={cart} onClick ={getRemove}>Remove</button> ;
          })}
            <button onClick ={addCart}>Add</button>

            

        </div>

    );
}

export default PizzaItem;