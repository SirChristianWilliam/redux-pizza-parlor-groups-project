// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// function CheckoutPage() {
//     // const dispatch = useDispatch(); TODO will be used on line 14
//     const cartItems = useSelector(store => store.cart);
//     const handlecheckout = (evt) => {
//         evt.preventDefault();
//         console.log(cartItems, "CART ITEMS BE");
//         //TODO: Clear the cart later, this will be a DISPATCH 'CLEAR_CART', payload: {cartItems}
//     }
//     return (
//         <>
//             <h2>CheckoutPage Component</h2>
//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Cost</th>
//                 </tr>
//                 <tr>
//                     {cartItems.map((product) => {
//                         return <td key={product.id}>{product.name} ${product.cost}</td>;
//                     })}
//                 </tr>
//                 <button onClick={handlecheckout} className="checkoutBtn">
//                     <Link to="/">Checkout</Link>
//                 </button>
//             </table>

//         </>
//     )
// }

// export default CheckoutPage;