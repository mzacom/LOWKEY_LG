import React from "react";
import styles from "../style";
import { deliveryImg } from "../assets";
import { motion } from "framer-motion";



const OurCompany = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={`relative flex flex-col sm:flex-row bg-cover bg-center w-full h-auto ${styles.padding} py-[2rem] ${styles.paddingX}`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 0, 0.6), rgba(0, 255, 0, 0.6)), url(${deliveryImg})`
        }}
      >

        <section className="card w-full h-[440px]"></section>
      </motion.section>
    </>
  );
};

export default OurCompany;
