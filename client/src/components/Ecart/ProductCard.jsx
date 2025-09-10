import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { toast } from 'react-toastify';

const ProductCard = ({ product, addCart }) => {

    const handleClick = () => {
        addCart(product);
        toast.success("Added to cart!!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg group"
        >
            <div className="relative h-56 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-4">

                <h3 className="font-bold text-lg text-zinc-800 mb-2">{product.name}</h3>
                <p className="text-zinc-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-yellow-600">₹{product.price}</span>
                </div>

                <button
                    className="w-full py-2 px-4 bg-zinc-100 rounded-xl text-zinc-700 font-medium flex items-center justify-center gap-2 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                    onClick={handleClick}
                >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                </button>

            </div>
        </motion.div>
    );
};

export default ProductCard;
