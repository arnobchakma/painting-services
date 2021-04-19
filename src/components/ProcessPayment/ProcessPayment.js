import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const ProcessPayment = ({ service }) => {
   const stripePromise = loadStripe(
      'pk_test_51IeE4hGP3xbR0O90euMWkiNEB4s6bAMElmOOmrvmRjzrA7i8F0SVF1jPtlRBcTqGV6PK0zrqq7nPBSMokhnDgBQY00Oloy3HM5'
   );
   return (
      <Elements stripe={stripePromise}>
         <PaymentCard service={service}></PaymentCard>
      </Elements>
   );
};

export default ProcessPayment;
