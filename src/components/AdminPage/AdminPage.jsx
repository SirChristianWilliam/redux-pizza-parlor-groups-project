import React, { useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

function AdminPage() {

    useEffect(()=>{
        axios({
            method: 'GET',
            url: '/api/order'
        })
        .then((response)=>{

        })
        .catch((error)=>{
            console.error('Admin /api/order GET error',error);
        });

    },[params.id]);


    return (
        <>
            <h2>AdminPage Component</h2>
        </>
    )
}


export default AdminPage;