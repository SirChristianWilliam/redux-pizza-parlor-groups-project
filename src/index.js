import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const cartPizzas = (state = [], action) => {
    // TODO: Save Products added to the cart
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_PIZZA_FROM_CART':
            return [...state.slice(action.payload.id)];
            logger('NEED TO REMOVE ITEM FROM PIZZA CART');
        case 'CLEAR_PIZZACART_AND_CUSTOMERINFO':
            return [];
    }

    return state;
};

const customerInfo = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_CUSTOMERINFO':
            return action.payload;
        case 'CLEAR_PIZZACART_AND_CUSTOMERINFO':
            return {};
        
    }
    return state;
};

const pizzas = (state = [], action) => {
    // TODO: Save all products from the server
    switch (action.type) {
        case 'SET_PIZZAS':
            return action.payload;
    }
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        pizzas,
        cartPizzas,
        customerInfo
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>
    , document.getElementById('root'));
