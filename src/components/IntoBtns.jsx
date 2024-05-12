import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
const IntoBtns = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={` flex w-full gap-4 item-start mt-[1rem] sm:text-2xl  `}
      >
        <button
          className={` bg-[lime] ${styles.btnPadding} text-xl sm:px-[20px] px-[15px] `}
        >
          Book Now
        </button>
        <button
          className={` bg-[lime] ${styles.btnPadding} px-[15px] sm:px-[20px] `}
        >
          Contact Us
        </button>
      </motion.section>
    </>
  );
};

export default IntoBtns;
