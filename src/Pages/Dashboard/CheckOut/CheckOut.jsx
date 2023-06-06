import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setCardError('')
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-info btn-sm my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-red-600 mb-10'>{cardError && cardError}</p>
        </div>
    );
};

export default CheckOut;