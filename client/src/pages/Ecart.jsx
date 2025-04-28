import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "../components/Ecart/CartDrawer";
import SearchBar from "../components/Ecart/SearchBar";
import ProductList from "../components/Ecart/ProductList";
import { ShoppingCart } from "lucide-react";
import { products } from "../components/Ecart/Products";
import { ToastContainer } from 'react-toastify';

const ECart = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [cartItem, setCartItem] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOffCanvas = () => setIsOpen(!isOpen);

  const addCart = (product) => {
    setCartItem(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);

      let updatedCart;
      if (exists) {
        updatedCart = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevItems, { ...product, quantity: 1 }];
      }

      // Save the updated cart to localStorage
      localStorage.setItem('cartItem', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };


  const removeCart = (productId) => {
    setCartItem(prevItems => {
      const updatedCart = prevItems.filter(item => item.id !== productId);

      localStorage.setItem('cartItem', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };


  const updateQuantity = (productId, delta) => {
    setCartItem(prevItems => {
      const updatedCart = prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );

      localStorage.setItem('cartItem', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };


  const total = cartItem.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="relative min-h-screen bg-background pt-6 md:pt-16 lg:pt-20">
      <div className="container mx-auto mb-8 max-w-4xl relative">
        <div className="text-center px-4">

          <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-3">Discover Amazing Products</h1>
          <p className="text-xl mb-1 md:text-base text-zinc-700 italic">Find the perfect tech for your needs</p>
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>

      <div className="container mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} addCart={addCart} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-zinc-600 text-lg">
                No products found matching your search.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <button
        className="fixed top-40 right-5 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 transition-all z-50"
        onClick={toggleOffCanvas}
      >
        <ShoppingCart className="w-6 h-6" />
        {cartItem.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {cartItem.length}
          </span>
        )}
      </button>


      <CartDrawer
        isOpen={isOpen}
        toggleOffCanvas={toggleOffCanvas}
        cartItem={cartItem}
        removeCart={removeCart}
        updateQuantity={updateQuantity}
        total={total}
      />

      <ToastContainer />
    </div>
  );
};

export default ECart;

