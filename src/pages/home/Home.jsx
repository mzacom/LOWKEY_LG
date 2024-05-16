import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  NavBar,
  Hero,
  About,
  ServicesH,
  Why,
  Get,
  Footer,
  OurCompany,

} from "../../components";

import styles from "../../style";

const Home = () => {
  return (
    <>
      <section className={`${styles.section}`}>
        <NavBar />

        <div id="/">
          <Hero />
        </div>

        {/* Our company */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <OurCompany />
        </motion.div>

        <ServicesH />
      
      </section>
    </>
  );
};

export default Home;
