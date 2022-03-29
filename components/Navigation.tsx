import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navigation py-4  px-4 shadow-md">
      <div className="lg:px-10 mx-auto">
        <div className="nav-desktop-container flex justify-between">
          <div className="logo-container flex items-center">
            <Link href="/">
              <a className="logo-link w-3/5 lg:w-full flex justify-start md:items-center py-2">
                <img
                  className="logo-image h-full w-full"
                  src="http://localhost:3000/images/logo-simple.png"
                ></img>{" "}
              </a>
            </Link>
          </div>
          <div className="hidden desktop-menu lg:flex items-center space-x-1">
            <Link href="/about-us">
              <a className="py-4 px-3 text-sm hover:text-brand-purple">About Us</a>
            </Link>
            <Link href="/programs">
              <a className="py-4 px-3 text-sm hover:text-brand-purple">Programs</a>
            </Link>
            <Link href="/events">
              <a className="py-4 px-3 text-sm hover:text-brand-purple">Event</a>
            </Link>
            <Link href="#">
              <a className="py-2 px-5  text-sm bg-brand-green text-white rounded-sm hover:text-black">
                Donate
              </a>
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button className="mobile-menu-button" onClick={handleClick}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          active ? "" : "hidden"
        } "h-screen mobile-menu bg-brand-blue z-50"`}
      >
        <Link href="/programs">
          <a className="block py-2 px-4 text-white border-b-2">Programs</a>
        </Link>
        <Link href="/events">
          <a className="block py-2 px-4 text-white border-b-2">Event</a>
        </Link>
        <Link href="/about-us">
          <a className="block py-2 px-4 text-white border-b-2">About Us</a>
        </Link>
        <Link href="#">
          <a className="block py-2 px-4 text-white border-b-2">Donate</a>
        </Link>
      </div>
    </nav>
  );
};
