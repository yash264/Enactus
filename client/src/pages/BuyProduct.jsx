import React from "react";
import { useLocation } from "react-router-dom";
import InputFrom from "../components/BuyProduct/InputFrom";
import Table from "../components/BuyProduct/Table";
import Payment from "../components/BuyProduct/Payment";

const BuyProduct = () => {

    const location = useLocation();
    const { countryCode, phoneNo } = location.state;
    console.log(countryCode, phoneNo);

    return (
        <>
            <section className="relative min-h-screen bg-background pt-6 md:pt-16 lg:pt-20">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start md:gap-8">
                        
                        <div className="md:col-span-2">
                            <InputFrom countryCode={countryCode} phoneNo={phoneNo} />
                        </div>

                        <div className="md:col-span-1">
                                <Table />
                                <Payment />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyProduct;