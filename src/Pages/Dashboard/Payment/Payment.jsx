import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from '../CheckOut/CheckOut';

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="payment" subHeading='please process'></SectionTitle>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <h2 className='text-4xl font-semibold text-center mb-10'>Payment Method</h2>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;