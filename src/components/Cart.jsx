import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { toast } from "react-toastify";

const Cart = ({ cart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  useEffect(() => {
    const data = cart.map((item) => ({
      ...item,
      qty: item.qty || 1,
    }));
    setItems(data);
  }, [cart]);

  const increase = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // ✅ REMOVE FUNCTION
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    toast.warn('Item Remove')
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-[25%] lg:w-[20%] p-4 md:h-screen md:sticky md:top-4">
        <SideBar />
      </div>

      <div className="bg-white p-4 rounded-xl w-full md:w-[75%] lg:w-[80%] shadow">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-3 border-b last:border-b-0"
              >
                <img
                  src={item.images[0]}
                  className="w-28 h-24 object-cover rounded"
                  alt={item.title}
                />

                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-blue-700 font-bold">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.qty}</span>

                    <button
                      onClick={() => increase(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>

                    {/* ✅ REMOVE BUTTON */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-xl text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
