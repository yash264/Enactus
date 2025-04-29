import React from 'react';

const Payment = () => {

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
            // Fetch order ID from the backend
            /*const response = await fetch('http://localhost:4000/create-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ amount: 500, currency: 'INR' }), // Amount in rupees
            });
      
            const order = await response.json();
            console.log(order);*/

            // Razorpay options
            const options = {
                key: 'rzp_test_4oZFEgMaUvhZbk', // Replace with your Razorpay key ID
                amount: 10000,
                currency: "INR",
                name: 'Enactus NIT Prayagraj',
                description: 'Test Transaction',
                //order_id: order.id,
                handler: function (response) {
                    console.log(response);
                    alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                },
                prefill: {
                    name: 'Yash Pandey',
                    email: 'yp5094280@gmail.com',
                    contact: '7388710135',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        } 
        catch(error){
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