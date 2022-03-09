import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import LoadAllAdmin from '../LoadAllAdmin/LoadAllAdmin';

const AllAdmins = () => {
   const [allAdmin, setAllAdmin] = useState([]);

   useEffect(() => {
      fetch('https://cryptic-basin-05682.herokuapp.com/allAdmins')
         .then(res => res.json())
         .then(data => setAllAdmin(data));
   }, []);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
               <div id="deleteTable">
                  <h3 className="my-5 fs-1 font-color">All Admin</h3>
                  <Table bordered>
                     <thead className='normal-text-color'>
                        <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Edit And Delete</th>
                        </tr>
                     </thead>
                     <tbody className='normal-text-color'>
                        {allAdmin.map(admin => (
                           <LoadAllAdmin admin={admin}></LoadAllAdmin>
                        ))}
                     </tbody>
                  </Table>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AllAdmins;
