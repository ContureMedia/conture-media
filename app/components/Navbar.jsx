"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-black backdrop-blur-lg z-[100] mx-auto  border-b border-slate-950  shadow-md top-0 sticky transition-all duration-500 ${
          isSticky
            ? "sticky bg-opacity-50 top-0 md:translate-y-3 md:w-3/4 lg:w-4/5 mx-auto md:rounded-full md:shadow-md z-[100] transition-all duration-500"
            : "w-full z-[100] "
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logolight.png" alt="Logo" width={120} height={120} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="lg:block hidden">
              <a
                href="mailto:Business@conturemedia.com?subject=I'm%20interested%20in%20your%20services&body=Hi%20Conture%20Media%2C%0A%0AI%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20back."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Connect"
                  className="bg-blue-500 text-white hover:bg-blue-600 rounded-full"
                />
              </a>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden bg-gray-200 outline-none ring-2  dark:text-gray-400 hover:bg-gray-300 ring-gray-600"
            >
              {isOpen ? (
                <CgClose className="w-6 h-6" />
              ) : (
                <RiMenu3Fill className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col items-start p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="block py-2 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Price
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="block py-2 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-black"
                  >
                    Services
                    <FaAngleDown
                      className={`inline-block w-4 h-4 ml-1 text-gray-500 dark:text-gray-400 ${
                        isDropdownOpen
                          ? "transform rotate-180 transition-all duration-150"
                          : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="z-[50] absolute left-auto font-bold divide-y divide-gray-100 bg-gray-950 rounded-lg shadow w-[200px] dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul className="py-2 text-sm text-white dark:text-gray-400">
                        <li>
                          <Link
                            href="/faq"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/book"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-black  dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Get Free E-book
                          </Link>
                        </li>
                      </ul>
                      <div className="py-1">
                        <Link
                          href="/more"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray100  dark:hover:bg-gray600 dark:text-gray200 dark:hover:text-white"
                        >
                          More Services &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-black hover:"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
