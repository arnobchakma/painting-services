import React from 'react';
import PainterTeam from '../PainterTeam/PainterTeam';

const Painter = () => {
   const painterData = [
      {
         painterImg: 'https://i.ibb.co/gz3JhrY/worker1.jpg',
         name: "Ruhana Parbina",
         position: "Worker"
      },
      {
         painterImg: 'https://i.ibb.co/ZXbBSqg/worker2.jpg',
         name: "Rohan Sing",
         position: "Worker"
      },
      {
         painterImg: 'https://i.ibb.co/ggsCsLx/worker4.jpg',
         name: "Krisna Malik",
         position: "Worker"
      },
      {
         painterImg: 'https://i.ibb.co/DCpPVq2/worker3.jpg',
         name: "Jihan Sing",
         position: "Worker"
      },
      {
         painterImg: 'https://i.ibb.co/gdbhj94/worker5.jpg',
         name: "Sharmina Malik",
         position: "Worker"
      },
      {
         painterImg: 'https://i.ibb.co/Zf7wYtS/Studio-shot-of-young-beautiful-woman-wearing-wite-casual-shirt-with-red-stripes-and-brown-apron-on-y.jpg',
         name: "Trinia Mega",
         position: "designer"
      }
   ]

   return (
      <section>
         <div className="container py-5 pt-5">
            <div className="text-center pb-4 normal-text-color">
               <h1><span className="font-color">UNIQUE</span> TEAM</h1>
            </div>
            <div className="d-flex row">
               {
                  painterData.map(painter => <PainterTeam painter={painter}></PainterTeam>)
               }
            </div>
         </div>
      </section>
   );
};

export default Painter;