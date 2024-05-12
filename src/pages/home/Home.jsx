import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  NavBar,
  Hero,
  About,
  Services,
  Why,
  Get,
  Footer,
  OurCompany,
} from "../../components";

import styles from "../../style";

const Home = () => {
  const [showOurCompany, setShowOurCompany] = useState(false);

  useEffect(() => {
    // Simulate delay for the truck to drive in
    const timer = setTimeout(() => {
      setShowOurCompany(true);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className={`${styles.section}`}>
        <NavBar />
        <Hero />

        {/* Our company */}
        {showOurCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Adjust the duration as needed
          >
            <OurCompany />
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Home;
