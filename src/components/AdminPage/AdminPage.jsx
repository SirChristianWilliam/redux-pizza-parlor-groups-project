import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './AdminPage.css'
function AdminPage() {

    const [orders,setOrders] = useState([]);

    const params = useParams();

    useEffect(()=>{
        axios({
            method: 'GET',
            url: '/api/order'
        })
        .then((response)=>{
            setOrders(response.data);
        })
        .catch((error)=>{
            console.error('Admin /api/order GET error',error);
        });

    },[params.id]);


    return (
        <div className='tableDiv'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order)=>(
                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default AdminPage;