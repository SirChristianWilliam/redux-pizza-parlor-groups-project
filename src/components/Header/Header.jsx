import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Header() {

    return (
        <>
            <h2> Header Component </h2>
        </>
    )
}



export default Header;