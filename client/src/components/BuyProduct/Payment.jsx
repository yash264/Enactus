import React from 'react';

const Payment = ({
    name, email,
    countryCode, phoneNo,
    address, total
}) => {

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
                    console.log(response);
                    alert("Payment successful!!");
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

        <div className="text-center pt-4">
            <button
                onClick={loadRazorpay}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
            >
                Pay with Razorpay
            </button>
        </div>
    );
};

export default Payment;