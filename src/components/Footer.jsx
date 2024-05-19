import React from "react";
import styles from "../style";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section
        className={` justify-between items-center  sm:pt-[8rem] py-[2rem]   flex flex-col w-full bg-[lime] ${styles.paddingX2} `}
      >
        <div className="  sm:flex-row  flex justify-between w-full  ">
          {/* logo */}
          <p
            className={` hidden sm:flex   items-center ${styles.boldText} ${styles.whiteBg} ${styles.blackTx} ${styles.btnPadding}`}
          >
            LOWKEY
          </p>

          {/* NavLinks */}
          {navLinks.map((navs) => {
            return (
              <Link
                className=" hidden sm:flex text-xl font-semibold  hover:text-slate-500 bg-[lime] p-3 items-center justify-center rounded-full px-[2rem] "
                key={navs.id}
                to={`${navs.path}`}
              >
                {navs.title}
              </Link>
            );
          })}

          <Link
            className={` hidden sm:flex  ${styles.greyBg} flex justify-center items-center text-xl font-semibold  ${styles.btnPadding}`}
          >
            Book Now
          </Link>
        </div>

        {/* Horizontal */}
        <div className=" mt-[1rem] sm:mt-[70px] h-[2px] bg-slate-200 "></div>

        <div className=" sm:flex sm:py-[4rem] py-3 justify-between items-center ">
          <p className="  mt-3 sm:mt-0 sm:w-[45%] text-xl">
            <span className="text-3xl font-bold">LOWKEY Logistics</span>
            <br /> We are dedicated to providing seamless logistics solutions
            tailored to meeting your specific needs no matter the size or
            complexity of your operations
          </p>

          <p className="  sm:w-[50%] mt-4 sm:mt-0  text-xl">
            <span className="text-3xl w-full justify-between  font-bold">
              Get in touch
            </span>

            <p className=" w-full gap-5   mt-2 sm:flex  ">
              <p className=" flex gap-5 flex-col">
                <p className=" gap-2 flex items-center">
                  <i className=" fa-solid fa-location "></i>
                  <span>Unit 36, 416 Brixton Road, Ile-Ife Osun</span>
                </p>

                <p className=" flex items-center gap-2 ">
                  <i className="fa-solid fa-clock"></i>
                  <span>24 hours </span>
                </p>
              </p>

              <p className=" flex mt-4 sm:mt-0  flex-col gap-2">
                <p className="flex items-center gap-2" >
                  <i className="fa-solid fa-phone "></i>
                  <a href="tel:+2349041589381">+2349041589381</a>
                </p>

                <p className=" flex items-center gap-2 mt-3" >
                  <i className="fa-solid fa-envelope   "></i>
                  <a href="mailto:oyetolamuiz81@gmail.com">oyetolamuiz81@gmail.com</a>
                </p>
              </p>
            </p>
          </p>
        </div>
        
      </section>
        
    </>
  );
};

export default Footer;
