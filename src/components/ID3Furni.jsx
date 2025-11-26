import React, { useEffect, useState } from "react";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import SideBar from "./SideBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

const ID3Furni = ({ onAddToCart }) => {
  const [data3, setData3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const result = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );

        const filterData = result.data.filter((item) => item.category.id === 3);
        setData3(filterData);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const filterData = data3.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCart = (item) => {
    onAddToCart(item);
    //  navigate("/Cart");
    toast.success("Item added to cart ✅");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-[25%] lg:w-[20%] p-4 md:h-screen md:sticky md:top-4">
        <SideBar />
      </div>

      {/* Main content */}
      <div className="w-full md:w-[75%] lg:w-[80%] p-4">
        {loading ? (
          <div className="flex justify-center items-center w-full h-64">
            <BounceLoader />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-4">
            {/* Search */}
            <div className="mb-4 p-3 sticky top-0 bg-gray-100 rounded z-10">
              <div className="">
                <h1 className="text-2xl font-bold mb-3">Search Products</h1>
              </div>
              <div className="bg-white rounded-xl shadow p-3">
                <input
                  type="text"
                  className="text-slate-900 text-lg w-full outline-none"
                  placeholder="Search Furniture"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Products / empty */}
            {filterData.length > 0 ? (
              filterData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between p-3 border-b last:border-b-0"
                >
                  <div className="md:w-[30%] mb-3 md:mb-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full max-h-76 md:h-70 object-fill rounded"
                    />
                  </div>

                  <div className="md:w-[50%] px-0 md:px-6">
                    <p className="text-lg md:text-xl font-semibold hover:text-blue-600 mb-2">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-base text-gray-700">
                      {item.description}
                    </p>
                  </div>

                  <div className="md:w-[20%] text-center md:text-right mt-3 md:mt-0">
                    <p className="text-xl font-bold border-b-2 pe-1 inline-block border-gray-400 text-blue-700">
                      ${item.price}
                    </p>
                    <div className="flex md:block justify-center gap-2 md:gap-0">
                      <del className="italic p-2 font-semibold text-green-600">
                        ${(item.price + item.price * 0.2).toFixed(2)}
                      </del>
                    </div>
                    <p className="italic text-sm md:text-base underline">
                      20% Discount
                    </p>
                    <button
                      onClick={() => handleCart(item)}
                      className="cursor-pointer font-semibold text-gray-900 mt-5 px-3 py-2 bg-green-500 rounded text-center"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center py-12 text-gray-500">
                <span className="text-4xl">🔍</span>
                <p className="text-lg font-medium">No results found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ID3Furni;
