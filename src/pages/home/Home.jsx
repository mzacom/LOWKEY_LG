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
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <OurCompany />
        </motion.div>

        <ServicesH />
        <Why />
        <Get/>
      </section>
    </>
  );
};

export default Home;
