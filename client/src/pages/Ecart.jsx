import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart } from "lucide-react";
import { HiTrash } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

import {asset} from '../images/asset.js'
import { ToastContainer, toast } from 'react-toastify';

const products = [
  {
    id: 1,
    name: "Decorative Handwoven Basket",
    price: 300,
    rating: 4.4,
    image: asset.en1,
    description: "A stylish Moonj grass basket with an intricate floral handle design, perfect for serving or décor"
  },
   
  {
    id: 2,
    name: "Hand-Knitted Sweater",
    price: 900,
    rating: 4.4,
    image:asset.en2,
    description: "A vibrant green, hand-knitted sweater featuring intricate patterns and buttons, perfect for cozy winter wear."
  },
  {
    id: 3,
    name: "Earthen clay water bottle",
    price: 450 ,
    rating: 4.4,
    image: asset.en3,
    description: "Beautifully hand-painted earthen clay water bottles, combining traditional craftsmanship with vibrant designs for eco-friendly and stylish hydration."
  },
  {
    id: 4,
    name: "Bulb-Shaped Basket and Small Carry Basket",
    price: 350+250 ,
    rating: 4.4,
    image: asset.en4,
    description: "Beautifully hand-painted earthen clay water bottles, combining traditional craftsmanship with vibrant designs for eco-friendly and stylish hydration."
  },
  {
    id: 5,
    name: "Round Basket with Lid",
    price: 450 ,
    rating: 4.4,
    image: asset.en5,
    description: "Beautifully hand-painted earthen clay water bottles, combining traditional craftsmanship with vibrant designs for eco-friendly and stylish hydration."
  },
  {
    id: 6,
    name: "Paper weight",
    price: 200 ,
    rating: 4.4,
    image: asset.en6,
    description: "Beautifully hand-painted earthen clay water bottles, combining traditional craftsmanship with vibrant designs for eco-friendly and stylish hydration."
  },
  {
    id: 7,
    name: "Baskets ",
    price: 200 ,
    rating: 4.4,
    image: asset.en7,
    description: "Beautifully hand-painted earthen clay water bottles, combining traditional craftsmanship with vibrant designs for eco-friendly and stylish hydration."
  },
  {
    id: 8,
    name: "Hamper Basket",
    price: 250 ,
    rating: 4.4,
    image: asset.en8,
    description: "Beautifully hand-painted earthen clay water bottles, combining traditional craftsmanship with vibrant designs for eco-friendly and stylish hydration."
  },
];

const ProductCard = ({ product, addCart }) => {
  const handleClick = () => {
    toast.info("Currently not available. We will reach out to you soon!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-zinc-800 mb-2">{product.name}</h3>
        <p className="text-zinc-600 text-sm mb-3">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-yellow-600">
            ₹{product.price}
          </span>
        </div>

        <button
          className="w-full py-2 px-4 bg-zinc-100 rounded-xl text-zinc-700 font-medium flex items-center justify-center gap-2 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
          onClick={handleClick} //onClick={() => addCart(product)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

const ECart = () => {
  const handleClick = () => {
    toast.info("Currently not available. We will reach out to you soon!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOffCanvas = () => setIsOpen(!isOpen);

  const addCart = (product) => {
    setCartItem((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeCart = (productId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, delta) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cartItem.reduce(
    (value, item) => value + item.quantity * item.price,
    0
  );

  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-6 md:pt-16 lg:pt-20">
      <div className="relative py-5 px-4 mb-1 overflow-hidden">
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-3">
              Discover Amazing Products
            </h1>
            <p className="text-sm sm:text-md md:text-lg text-zinc-700 font-medium">
              Find the perfect tech for your needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow-lg text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            layout
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addCart={addCart} />
            ))}
          </motion.div>
          {filteredProducts.length === 0 && (
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

      <div>
        <button
          className="fixed bottom-10 right-10 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 transition-all"
          onClick={toggleOffCanvas}
        >
          <ShoppingCart className="w-6 h-6" />
          {cartItem.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItem.length}
            </span>
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b pb-2 mb-4">
                <h2 className="text-lg font-bold">Your Cart</h2>
                <button
                  onClick={toggleOffCanvas}
                  className="text-zinc-600 hover:text-zinc-800"
                >
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>

              {cartItem.length > 0 ? (
                <ul>
                  {cartItem.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between mb-4"
                    >
                      <div>
                        <p className="font-medium text-zinc-800">{item.name}</p>
                        <p className="text-sm text-zinc-600">
                          {item.quantity} x ₹{item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-zinc-200 text-zinc-800 px-2 py-1 rounded hover:bg-zinc-300"
                        >
                          -
                        </button>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-zinc-200 text-zinc-800 px-2 py-1 rounded hover:bg-zinc-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeCart(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <HiTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-zinc-600 text-center">Your cart is empty.</p>
              )}

              <div className="border-t pt-4 mt-4">
                <p className="text-lg font-bold text-zinc-800">
                  Total: ₹{total.toFixed(2)}
                </p>
                <button onClick={handleClick} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-yellow-700 transition">
                  Proceed to Checkout
                </button>
                <ToastContainer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ECart;
