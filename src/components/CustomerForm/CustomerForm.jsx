import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function CustomerForm({ addNewCustomer }) {
    // let customer = useSelector(store => store.customerInfo);

    let [name, setName] = useState('');
    let [type, setType] = useState(false);
    let [streetaddress, setStreetAddress] = useState('');
    let [city, setCity] = useState('');
    let [zip, setZip] = useState('');

    const handleTypeChange = (event) => {
        setType({
            customer: setType
        });
    }

    const handleNameChange = (event) => {
        setName({
            customer: setName
        });
    }

    const handleCityChange = (event) => {
        setCity({
            customer: setCity
        });
    }

    const handleStreetAddressChange = (event) => {
        setStreetAddress({
            customer: setStreetAddress
        });
    }

    const handleZipChange = (event) => {
        setZip({
            customer: setZip
        });
    }

    const addCustomer = (event) => {
        event.preventDefault();
        console.log(customerToAdd, "CUSTOMER TO BE ADDED");
        addNewCustomer(customerToAdd);
        dispatch({
            type: 'ADD_CUSTOMERINFO',
            payload: {
                type,
                name,
                streetaddress,
                city,
                zip,
                methodOfGet
            }
        })
        // TODO clear input fields
    };


    return (
        <>
            <h2>Step 2: Customer Information</h2>

            <form onSubmit={(event) => addCustomer(event)}>
                <input
                    onChange={handleTypeChange}
                    type={Boolean}
                    placeholder='cost'
                />
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
              

            </form>
            <button type='submit'>Next</button>
        </>
    )
}

export default CustomerForm;