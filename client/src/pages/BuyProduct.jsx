import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputFrom from "../components/BuyProduct/InputFrom";
import Table from "../components/BuyProduct/Table";
import Payment from "../components/BuyProduct/Payment";

const BuyProduct = () => {

    const location = useLocation();
    const { countryCode, phoneNo } = location.state;

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [method, setMethod] = useState("")
    const [products, setProducts] = useState([]);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const isValid =
            name.trim() &&
            email.trim() &&
            phoneNo.trim() &&
            address.trim();

        setFormValid(Boolean(isValid));
    }, [name, email, phoneNo, address]);

    const total = products.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <>
            <section className="relative min-h-screen bg-background pt-6 md:pt-16 lg:pt-20">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start md:gap-8">

                        <div className="md:col-span-2">

                            <InputFrom
                                name={name}
                                setName={setName}
                                countryCode={countryCode}
                                phoneNo={phoneNo}
                                email={email}
                                setEmail={setEmail}
                                address={address}
                                setAddress={setAddress}
                                method={method}
                                setMethod={setMethod}
                            />

                        </div>

                        <div className="md:col-span-1">

                            <Table
                                products={products}
                                setProducts={setProducts}
                            />


                            {formValid === false ?
                                (
                                    " "
                                ) : (
                                    <Payment
                                        name={name}
                                        countryCode={countryCode}
                                        phoneNo={phoneNo}
                                        email={email}
                                        address={address}
                                        products={products}
                                        total={total}
                                        method={method}
                                    />
                                )
                            }

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyProduct;