import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center py-5 mb-8">
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Welcome to <br /> E-Comm Store
          </h1>
        </Link>

        <p className="mt-3 text-gray-600 max-w-xs">
          Browse our premium collection of electronics, furniture, shoes and
          more wit <u>20% Discount</u> .
        </p>
      </div>

      <div className="mb-5 text-center">
        <NavLink
          to="/Cart"
          className="font-medium rounded  px-5 me-3 text-center py-2 bg-amber-300 "
        >
          Cart
        </NavLink>
      </div>

      <h2 className="text-xl font-semibold mb-4">Categories</h2>

      <ul className="space-y-3">
        <li>
          <NavLink
            to="/Elecronics"
            className={({ isActive }) =>
              `block px-4 py-2 rounded font-semibold text-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-slate-100"
              }`
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Furniture"
            className={({ isActive }) =>
              `block px-4 py-2 rounded font-semibold text-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-slate-100"
              }`
            }
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shoes"
            className={({ isActive }) =>
              `block px-4 py-2 rounded font-semibold text-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-slate-100"
              }`
            }
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Miscell"
            className={({ isActive }) =>
              `block px-4 py-2 rounded font-semibold text-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-slate-100"
              }`
            }
          >
            Miscellaneous
          </NavLink>
        </li>
      </ul>

      <div className="mt-6 mb-2 text-slate-800 bg-slate-50 p-3 rounded-lg text-sm">
        Select a category to view matching products.
      </div>
    </div>
  );
};

export default SideBar;
