import React from 'react';
import { Dropdown } from 'react-bootstrap';

const LoadClientOrders = ({ order }) => {
   
   const handleStatus = (id, e) => {
      const newStatus = e.target.innerText;
      fetch('https://cryptic-basin-05682.herokuapp.com/updateOrder', {
         method: 'PATCH',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify({ id, newStatus }),
      });
   };

   return (
      <>
         <tr>
            <td>{order.email}</td>
            <td>{order.title}</td>
            {/* <td>{order.paymentMethod.id}</td> */}
            <td>
               <button className={order.status} button-style disabled="disabled">
                  {order.status}
               </button>
            </td>
            <td>
               <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Status</Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Dropdown.Item
                        className="text-warning"
                        onClick={e => handleStatus(order._id, e)}
                        to="/order"
                     >
                        Pending
                     </Dropdown.Item>
                     <Dropdown.Item
                        className="text-info"
                        onClick={e => handleStatus(order._id, e)}
                        to="/order"
                     >
                        On-Going
                     </Dropdown.Item>
                     <Dropdown.Item
                        className="text-success"
                        onClick={e => handleStatus(order._id, e)}
                        to="/order"
                     >
                        Done
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </td>
         </tr>
      </>
   );
};

export default LoadClientOrders;
