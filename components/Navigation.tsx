import Link from "./Link";
import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import styles from "../styles/components/Navigation.module.scss";

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navigation py-4 shadow-md">
      <div className="lg:px-10 mx-auto">
        <div className="nav-desktop-container pl-4 flex justify-between">
          <div className="logo-container flex items-center">
            <Link href="/">
              <img
                className="logo-image h-full w-full"
                src="/images/full-logo.png"
              ></img>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/about-us">About Us</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/events">Events</Link>
            <Button size="small" href="https://www.tinyurl.com/ymcy9f6e">Donate</Button>
          </div>
          <div className="lg:hidden flex items-center pr-4">
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
        } " mobile-menu bg-brand-blue z-50"`}
      >
        <Link href="/about-us">About Us</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/events">Event</Link>
        <Link href="https://www.paypal.com/donate/?hosted_button_id=AV3BJKXGLJ2BU">
          Donate
        </Link>
      </div>
    </nav>
  );
};
