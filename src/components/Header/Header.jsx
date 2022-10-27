import React, { useEffect } from 'react';
import axios from 'axios';
import './Header.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Header() {

    return (
        <>
         <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
        </>
    )
}



export default Header;