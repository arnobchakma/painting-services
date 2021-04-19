import React, { useContext, useMemo } from 'react';
import {
   useStripe,
   useElements,
   CardNumberElement,
   CardCvcElement,
   CardExpiryElement,
} from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';

const useOptions = () => {
   const options = useMemo(
      () => ({
         style: {
            base: {
               fontSize: '16px',
               color: '#424770',
               letterSpacing: '0.025em',
               fontFamily: 'Source Code Pro, monospace',
               '::placeholder': {
                  color: '#aab7c4',
               },
            },
            invalid: {
               color: '#9e2146',
            },
         },
      }),
      []
   );
   return options;
};

const PaymentCard = ({ service }) => {
   const history = useHistory();
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const email = loggedInUser && loggedInUser.email;
   const stripe = useStripe();
   const elements = useElements();
   const options = useOptions();
   console.log(email)

   const handleSubmit = async event => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      const payload = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardNumberElement),
      });
      const clientOrder = { ...service, email, status: 'pending', ...payload };

      fetch('https://cryptic-basin-05682.herokuapp.com/orderService', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(clientOrder),
      });
      history.push('/myOrder');
   };

   return (
      <form onSubmit={handleSubmit}>
         <p className="my-3" >Pay With Card:</p>
         <label>
            Card number
            <CardNumberElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <label className="my-3">
            Expiration date
            <CardExpiryElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <label className="mb-3">
            CVC
            <CardCvcElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <button
            className="btn button-style text-white px-4 mt-1"
            type="submit"
            disabled={!stripe}
         >
            Confirmation
         </button>
      </form>
   );
};

export default PaymentCard;
