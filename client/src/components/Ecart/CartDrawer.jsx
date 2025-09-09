import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import CartItem from "./CartItem";
import { Authentication } from "./Authentication";

const CartDrawer = ({ isOpen, toggleOffCanvas, cartItem, removeCart, updateQuantity, total }) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto"
                >
                    <div className="flex items-center justify-between border-b pb-2 mb-4">

                        <h2 className="text-lg font-bold">Your Order Summary</h2>

                        <button onClick={toggleOffCanvas} className="text-zinc-600 hover:text-zinc-800">
                            <HiOutlineX className="w-6 h-6" />
                        </button>
                    </div>

                    {cartItem.length > 0 ? (
                        <ul>{cartItem.map(item => (
                            <CartItem key={item.id} item={item} removeCart={removeCart} updateQuantity={updateQuantity} />
                        ))}</ul>
                    ) : (
                        <p className="text-zinc-600 text-center">Your cart is empty.</p>
                    )}

                    <div className="border-t p-2 m-2">
                        <p className="text-lg font-bold text-center text-zinc-800">Total: ₹{total.toFixed(2)}</p>
                    </div>

                    {cartItem.length > 0 && (
                        <div className="border-t p-2 ml-12">
                            <Authentication />
                        </div>
                    )}

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
