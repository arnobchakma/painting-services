import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Painter from '../Painter/Painter';
import Services from '../Services/Services';
import SpecialService from '../SpecialService/SpecialService';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Services></Services>
         <SpecialService></SpecialService>
         <Painter></Painter>
         <Testimonial></Testimonial>
         <Footer></Footer>
      </div>
   );
};

export default Home;
