import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const LoadAllAdmin = ({ admin }) => {
   const [email, setEmail] = useState();

   const history = useHistory();

   // Handle Delete admin part
   const deleteAdmin = (anAdmin) => {
      const { email } = anAdmin;
      setEmail(email);
      window.location.reload();
   };

   useEffect(() => {
      fetch('https://cryptic-basin-05682.herokuapp.com/deleteAdmin', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email }),
      });
   }, [email]);
   history.push('/adminPanel');

   return (
      <>
         <tr>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
               <button className="btn button-style">
                  <FontAwesomeIcon icon={faPenSquare} />
               </button>
               <button
                  onClick={() => deleteAdmin(admin)}
                  className="btn button-style"
               >
                  <FontAwesomeIcon icon={faTrashAlt} />
               </button>
            </td>
         </tr>
      </>
   );
};

export default LoadAllAdmin;
