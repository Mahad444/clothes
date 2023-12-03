"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          {/* logo name  */}
          <div className="font-semibold text-2xl">
            <a href="/">Modestified ClothLine</a>
          </div>
          <nav className="max-md:hidden">
            <ul className=" flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  Shop
                </a>
              </li>
              <li>
                <a href="filters" className="py-3 inline-block w-full">
                  Filters
                </a>
              </li>
              <li>
                <a href="myproducts" className="py-3 inline-block w-full">
                  My Products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          >
            <img
              // adding a photo manually
              src="https://lh3.googleusercontent.com/-CYQRHQCbHdA/AAAAAAAAAAI/AAAAAAAAAAA/AML38-vMMT_uWejxplmPOAUsaUC8_iQR4g/photo.jpg?sz=46"
              alt="userImage"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? " " : "hidden"
              }`}
            >
              <Link href="/sign">LogIn</Link>
            </div>
          </div>
          <Link href="/cart">
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
            onClick={() => setShowNav(!showNav)}
          >
            {/* Mobile responsive and iPads */}

            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15] opacity-75 px-2">
          <li>
            <a href="/shop" className="py-3 inline-block w-full">
              Shop
            </a>
          </li>
          <li>
            <a href="/filters" className="py-3 inline-block w-full">
              Filters
            </a>
          </li>
          <li>
            <a href="/myproducts" className="py-3 inline-block w-full">
              My Products
            </a>
          </li>
        </ul>
        <div className="flex  items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none w-full bg-transparent ml-2 caret-blue-600 placeholder:front-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
