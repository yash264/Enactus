import React from 'react';
import Invoice from './Invoice';
import { ToastContainer, toast } from 'react-toastify';

const Payment = ({
    name, email,
    countryCode, phoneNo,
    address, total,
    products, method
}) => {

    const cashOnDelivery = () => {
        Invoice({
            name,
            countryCode,
            phoneNo,
            email,
            address,
            products,
            total,
            method: 'cod',
            transactionId: null
        });
        toast.success("Order placed Successfully!!", { autoClose: 3000 });
    };


    const loadRazorpay = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            initializePayment();
        };
    };

    const initializePayment = async () => {
        try {
            const options = {
                key: 'rzp_test_4oZFEgMaUvhZbk', // Replace with your Razorpay key ID
                amount: total * 100,
                currency: "INR",
                name: 'Enactus NIT Prayagraj',
                description: 'Test Transaction',

                handler: function (response) {
                    Invoice({
                        name,
                        email,
                        address,
                        phoneNo,
                        countryCode,
                        products,
                        total,
                        method: 'online',
                        transactionId: response.razorpay_payment_id
                    });
                    toast.success("Payment Compleleted Successful!!", { autoClose: 3000 });
                },

                prefill: {
                    name: name,
                    email: email,
                    contact: phoneNo,
                },
                notes: {
                    address: address,
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        }
        catch (error) {
            console.error(error);
        }

        // merchant id : PezpLzXDorHDDW
    };

    return (

        <div className="mt-6 text-center">
            {method === 'online' ? (
                <button
                    onClick={loadRazorpay}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded"
                >
                    Pay Online (via Razorpay)
                </button>
            ) : (
                <button
                    onClick={cashOnDelivery}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
                >
                    Place Order (Cash on Delivery)
                </button>
            )}
            
            <ToastContainer />
        </div>
    );
};

export default Payment;