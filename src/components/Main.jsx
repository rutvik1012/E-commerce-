import { Link } from "react-router-dom";
import Id2Image from "../assets/elec.jpg";
import Id3Image from "../assets/furni.avif";
import Id4Image from "../assets/shoes.avif";
import Id5Image from "../assets/eleId2.jpg";

const main = () => {
  return (
    <>
      {/* Hero / Welcome */}

      <div className="flex flex-col items-center justify-center text-center py-10 mb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          Welcome to E-Comm Store
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl">
          Browse our premium collection of electronics, furniture, shoes and
          more with <u>20% Discount</u>.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-10">
        {/* Electronics */}
        <Link to="/Elecronics">
          <div className="h-80 border-2 border-gray-800 bg-emerald-50 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img
              src={Id2Image}
              alt="Electronics"
              className="w-full h-56 border-b-2 border-gray-800 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-center">Electronics</h3>
            </div>
          </div>
        </Link>

        {/* Furniture */}
        <Link to="/Furniture">
          <div className="h-80 border-2 border-gray-800 bg-fuchsia-100 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img
              src={Id3Image}
              alt="Furniture"
              className="w-full h-56 border-b-2 border-gray-800 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-center">Furniture</h3>
            </div>
          </div>
        </Link>

        {/* Shoes */}
        <Link to="/Shoes">
          <div className="h-80 border-2 border-gray-800 bg-gray-200 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img
              src={Id4Image}
              alt="Shoes"
              className="w-full h-56 border-b-2 border-gray-800 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-center">Shoes</h3>
            </div>
          </div>
        </Link>

        {/* Miscellaneous */}
        <Link to="/Miscell">
          <div className="h-80 border-2 border-gray-800 bg-emerald-50 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img
              src={Id2Image}
              alt="111"
              className="w-full h-56 border-b-2 border-gray-800 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-center">
                Miscellaneous
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default main;
