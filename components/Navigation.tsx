import Link from "./Link";
import { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Image from "next/image";
import styles from "../styles/components/Navigation.module.scss";
import TEDX from "../constants/tedx";
import Carousel from "./Carousel"; 
export const Navigation = () => {
  const [active, setActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const handleClick = () => {
    setActive(!active);
  };

  const tedxSlides = TEDX.map((t, index) => {
    return (
      <img className='h-96' src={t.url} alt={t.name} />
    );
  });

  return (
    <nav className="navigation shadow-md">
      <div className="lg:px-6 mx-auto">
        <div className="nav-desktop-container pl-4 py-4 flex justify-between">
          <div className="logo-container flex items-center">
            <Link href="/">
              <img
                className="logo-image inline h-full w-full"
                src="/images/full-logo.png"
              ></img>
              <img onClick={openModalHandler}
                className="logo-image inline pl-3 pb-0.5 h-1/3 w-1/3"
                src='/images/TEDxKC.png'
              ></img>
            </Link>
          </div>
          {
            modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}><Carousel pagination={["arrows"]} slides={tedxSlides}></Carousel></Modal>
          }
          {
            modalIsOpen && <Backdrop onCancel={closeModalHandler}/>
          }
          <div className="hidden lg:flex items-center space-x-1 ">
            <Link href="/about-us">About Us</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/archives">Archives</Link>
            <Link href="/news">News</Link>
            <Link href="/faq">FAQ</Link>
            <Button
              size="small"
              href="https://secure.givelively.org/donate/we-code-kc"
            >
              Donate
            </Button>
            <Button
              size="small"
              href="https://wecodekc.my.salesforce-sites.com/VolunteersSignup"
            >
              VOLUNTEER
            </Button>
            <Button
              size="small"
              href="https://a.co/6ETECMC"
            >
             <span className="whitespace-nowrap">WISH LIST</span>
            </Button>
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
        } " mobile-menu text-white py-4 bg-brand-green z-50 "`}
      >
        <div className={styles.mobileMenu}>
          <Link href="/about-us">About Us</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/archives">Archives</Link>
          <Link href="/news">News</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="https://secure.givelively.org/donate/we-code-kc">
            Donate
          </Link>
          <Link href="https://wecodekc.my.salesforce-sites.com/VolunteersSignup">
            Volunteer
          </Link>
        </div>
      </div>
    </nav>
  );
};
