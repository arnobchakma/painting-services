import React, { useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import LoadClientOrders from './LoadClientOrders';
import { Table } from 'react-bootstrap';

const Orders = () => {
   const [clientOrder, setClientOrder] = useState([]);

   useEffect(() => {
      fetch('https://cryptic-basin-05682.herokuapp.com/clientOrders')
         .then(res => res.json())
         .then(data => {
            setClientOrder(data);
         });
   }, []);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
               <h3 className="mt-3 fw-bold font-color">Client Order Details</h3>
               <Table bordered>
                  <thead>
                     <tr>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Payment ID</th>
                        <th>Process</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {clientOrder.map(order => (
                        <LoadClientOrders order={order}></LoadClientOrders>
                     ))}
                  </tbody>
               </Table>
            </div>
         </div>
      </section>
   );
};

export default Orders;
