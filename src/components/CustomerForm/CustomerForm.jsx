import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function CustomerForm() {
    // let customer = useSelector(store => store.customerInfo);
    const history = useHistory();
    const dispatch= useDispatch();

    let [name, setName] = useState('');
    let [type, setType] = useState(false);
    let [streetaddress, setStreetAddress] = useState('');
    let [city, setCity] = useState('');
    let [zip, setZip] = useState('');

    const handleTypeChange = (event) => {
        setType(
             event.target.value
        );
    }

    const handleNameChange = (event) => {
        setName(
           event.target.value
        );
    }

    const handleCityChange = (event) => {
        setCity(
             event.target.value
        );
    }

    const handleStreetAddressChange = (event) => {
        setStreetAddress(
           event.target.value
        );
    }

    const handleZipChange = (event) => {
        setZip(
            event.target.value
        );
    }

    const addCustomer = (event) => {
        event.preventDefault();
            console.log("YOYOYOYOYOYOYO")
      
    
        dispatch({
            type: 'ADD_CUSTOMERINFO',
            payload: {
                type,
                name,
                streetaddress,
                city,
                zip
                // ,
                // methodOfGet
            }
        });
        history.push('/checkout')
    }

    // TODO clear input fields

    return (
        <>
            <h2>Step 2: Customer Information</h2>

            <form onSubmit={(event) => addCustomer(event)}>

                <input
                    onChange={handleNameChange}
                    type='text'
                    placeholder='Name'
                />

                <input
                    onChange={handleStreetAddressChange}
                    type='text'
                    placeholder='1560 Elm Street'
                />

                <input
                    onChange={handleCityChange}
                    type='text'
                    placeholder='City'
                />
                <input
                    onChange={handleZipChange}
                    type='text'
                    placeholder='Zipcode'
                />
                <p>
                    Pickup
                    <input
                        onChange={handleTypeChange}
                        type='radio'
                    // checked='unchecked'
                    />
                </p>

                <p>
                    Delivery
                    <input
                        onChange={handleTypeChange}
                        type='radio'
                    // checked='unchecked'
                    />
                </p>

                <button
                type='submit'
            >
                Next
            </button>
            </form>
           
        </>
    )
}

export default CustomerForm;