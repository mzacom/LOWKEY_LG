import React from "react";
import styles from "../style";
import { deliveryImg } from "../assets";




const OurCompany = () => {
  return (
    <>
      <section
        className={`relative flex flex-col sm:flex-row bg-cover bg-center w-full h-auto ${styles.padding} py-[2rem] ${styles.paddingX}`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 0, 0.292), rgba(0, 255, 0, 0.297)), url(${deliveryImg})`
        }}
      >

        <section className="card2 w-full h-[400px]">
          
        </section>
      </section>
    </>
  );
};

export default OurCompany;
