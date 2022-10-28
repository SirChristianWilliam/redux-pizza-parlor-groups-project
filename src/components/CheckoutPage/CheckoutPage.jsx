import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CheckoutPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const customerInfo = useSelector(store => store.customerInfo);
   
    const handleCheckout = (evt) => {
        evt.preventDefault();
        console.log(cartItems, "CART ITEMS BE");
        //TODO: Clear the cart later, this will be a DISPATCH 'CLEAR_CART', payload: {cartItems}
    }
    console.log(customerInfo, "name is");
    return (
        <>
        <form onSubmit={handleCheckout}>
            <h2>CheckoutPage Component</h2>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td>{customerInfo.name}</td>
                    <td>{customerInfo.type}</td>
                    <td>{customerInfo.streetaddress}</td>
                    <td>{customerInfo.city}</td>
                    <td>{customerInfo.zip}</td>

                    
                </tr>
               
                </tbody>
            </table>
            <button type="submit" className="checkoutBtn">
                    Checkout
                </button>
        </form>

        </>
    );
    }

export default CheckoutPage;
