import React, { useState } from "react";

const InputFrom = ({ countryCode, phoneNo }) => {

    return (
        <>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Cutomer Information</h2>

                <div class="grid grid-cols-1 gap-6 m-4 sm:grid-cols-3">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="name">Name</label>

                        <input id="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="phoneNo">Mobile Number</label>

                        <input id="phoneNo" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-slate-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            value={countryCode + phoneNo}
                            placeholder={countryCode + " " + phoneNo}
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="email">Email Id</label>

                        <input id="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                </div>

                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Address Details</h2>

                <div class="grid grid-cols-1 gap-6 m-4 sm:grid-cols-1">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="address">Delivery Address</label>

                        <input id="address" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                </div>

                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Payment Options</h2>

                <div class="grid grid-cols-2 gap-4 m-4">
                    <div class="flex items-center">

                        <input id="payment-online" type="radio" value="online" name="payment" class="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 focus:ring-neutral-100 focus:ring-2" />

                        <label for="payment-online" class="ms-2 text-sm font-medium text-gray-900">Credit Card/Debit Card/Netbanking (Razorpay)</label>

                    </div>

                    <div class="flex items-center">

                        <input id="payment-cod" type="radio" value="cod" name="payment" class="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 focus:ring-neutral-100 focus:ring-2" />

                        <label for="payment-cod" class="ms-2 text-sm font-medium text-gray-900">Cash on Delivery</label>
                        
                    </div>
                </div>


            </section>
        </>
    )
}

export default InputFrom;