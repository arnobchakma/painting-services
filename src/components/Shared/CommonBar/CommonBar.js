import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './CommonBar.css';

const CommonBar = () => {
   return (
      <section className="justify-content-center">
         <div className=" row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 ">
               <h2 className="my-4 text-center font-color">PAINTING SERVICES</h2>
               <img
                  className="img-fluid "
                  src={
                     'https://www.cleanfinishers.com/wp-content/uploads/2019/08/Paint-Service.jpg'
                  }
                  alt=""
               />
            </div>
         </div>
      </section>
   );
};

export default CommonBar;
