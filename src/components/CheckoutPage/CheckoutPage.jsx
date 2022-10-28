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
                <h2>Step 3: Checkout</h2>
                <h3 className="deliverOrPickup">For {customerInfo.type}</h3>
                <table>
                    <thead>
                        <tr>
                            <td>{customerInfo.name}</td>
                        </tr>
                        <tr>
                            <td>{customerInfo.streetaddress}</td>
                        </tr>
                        <tr>
                            <td>{customerInfo.zip}</td>
                        </tr>
                    </thead>
                </table>

                <table className="nameAndCostTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                        <tr>
                            {customerInfo.name}
                        </tr>

                    </tbody>
                </table>
                <h3 className="checkoutTotal">Total: $(total here)</h3>
                <button type="submit" className="checkoutBtn">
                    Checkout
                </button>
            </form>

        </>
    );
}

export default CheckoutPage;
