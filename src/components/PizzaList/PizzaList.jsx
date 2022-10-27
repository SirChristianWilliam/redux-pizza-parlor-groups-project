import {useSelector} from 'react-redux'
import './PizzaList.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
    //Need to just change this to the index.jsx
    const pizzas = useSelector(store => store.pizzas);
    
    return (
        <>
           
            <h2>Step 1: Select Your Pizza</h2>
            
            <div>
                <h3>
                {pizzas.map((pizza, i) => {
          return <PizzaItem key={i} pizza={pizza}  />;
        })}      
          </h3>
                
            </div>

            <section> 
            <Link to ='/checkout'> NEXT </Link>
            </section>
    
        </>
    )
}


export default PizzaList;