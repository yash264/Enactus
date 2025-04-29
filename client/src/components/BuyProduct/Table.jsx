import React, { useEffect } from "react";

const Table = ({products, setProducts}) => {

    useEffect(() => {
        const storedProducts = localStorage.getItem("cartItem");
        if (storedProducts) {
            try {
                const parsedCart = JSON.parse(storedProducts);
                setProducts(parsedCart);
            }
            catch (error) {
                console.error(error);
                setProducts([]);
            }
        }
    }, []);

    return (
        <>
            <h2 class="text-lg font-semibold text-center text-gray-700 capitalize dark:text-white">Order Summary</h2>

            <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
                <table className="min-w-full divide-y-2 divide-gray-200">

                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-2 whitespace-nowrap">Product</th>
                            <th className="px-3 py-2 whitespace-nowrap">Price</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {products.length > 0 ? (
                            <>
                                {products.map(item => (
                                    <tr key={item.id} className="hover:bg-yellow-50 transition">
                                        <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                                        <td className="px-4 py-3 text-gray-700">
                                            {item.quantity} × ₹{item.price}
                                        </td>
                                    </tr>
                                ))}

                                {/* Total row */}
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-3 font-semibold text-gray-900 text-right">Total:</td>
                                    <td className="px-4 py-3 font-bold text-green-600">
                                        ₹{products.reduce((sum, item) => sum + item.quantity * item.price, 0)}
                                    </td>
                                </tr>
                            </>
                        ) : (
                            <tr>
                                <td colSpan={2} className="px-4 py-4 text-center text-gray-500">
                                    No products in cart.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div >
        </>
    )
}

export default Table;