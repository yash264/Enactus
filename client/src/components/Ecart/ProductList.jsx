import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addCart }) => (
    <AnimatePresence mode="wait">
        <motion.div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" layout>
            {products.map(product => (
                <ProductCard key={product.id} product={product} addCart={addCart}/>
            ))}
        </motion.div>
    </AnimatePresence>
);

export default ProductList;
