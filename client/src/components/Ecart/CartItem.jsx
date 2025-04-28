import { HiTrash } from "react-icons/hi";

const CartItem = ({ item, removeCart, updateQuantity }) => (
    <li className="flex items-center justify-between mb-4">
        <div>
            <p className="font-medium text-zinc-800">{item.name}</p>
            <p className="text-sm text-zinc-600">{item.quantity} x ₹{item.price}</p>
        </div>
        <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(item.id, -1)} className="bg-zinc-200 text-zinc-800 px-2 py-1 rounded hover:bg-zinc-300">-</button>
            <button onClick={() => updateQuantity(item.id, 1)} className="bg-zinc-200 text-zinc-800 px-2 py-1 rounded hover:bg-zinc-300">+</button>
            <button onClick={() => removeCart(item.id)} className="text-red-600 hover:text-red-800">
                <HiTrash className="w-5 h-5" />
            </button>
        </div>
    </li>
);

export default CartItem;
