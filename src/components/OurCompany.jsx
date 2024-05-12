import React from "react";
import styles from "../style";
import { deliveryImg } from "../assets";



const OurCompany = () => {
  return (
    <>
      <section
        className={`relative flex flex-col sm:flex-row bg-cover bg-center w-full h-auto ${styles.padding} py-[2rem] ${styles.paddingX}`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 0, 0.6), rgba(0, 255, 0, 0.6)), url(${deliveryImg})`
        }}
      >

        <section className="card w-full h-[440px]"></section>
      </section>
    </>
  );
};

export default OurCompany;
