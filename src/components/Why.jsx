import React from "react";
import styles from "../style";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <>
      <section
        class={`${styles.padding} ${styles.paddingX} mt-[2rem] flex flex-col w-full ${styles.limeBg}`}
      >
        <h1 className=" text-xl font-bold md:text-4xl ">Why Choose Us</h1>

        <div className="container mx-auto w-full  pt-[2rem] ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-4 w-full">
            <motion.div
              whileInView={{ y: [80, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`p-4 bg-white shadow-xl w-[100%]  rounded-xl md:w-[400px] md:h-[350px] h-[250px] ${styles.greyBg} `}
            ></motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
