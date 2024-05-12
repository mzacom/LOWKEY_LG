import React, { useEffect, useState } from "react";
import {
  NavBar,
  Hero,
  About,
  Services,
  Why,
  Get,
  Footer,
  CarAnimation,
  TextAnimation,
} from "../../components";

import styles from "../../style";

const Home = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    // Check if the component has mounted before
    if (!localStorage.getItem('homeMounted')) {
      // Set a flag in localStorage indicating that the component has mounted
      localStorage.setItem('homeMounted', 'true');
      // Show the animations since this is the first load
      setShowPage(true);
    } else {
      // If the component has mounted before, don't show the animations
      setShowPage(true);
    }
  }, []);

  return (
    <>
      {/* Section A (Navbar and Hero section)  */}
      <section className={` ${styles.section}  `}>
        {!showPage && <CarAnimation onComplete={() => setShowPage(true)} />}
        {!showPage && <TextAnimation onComplete={() => setShowPage(true)} />}
        {showPage && <NavBar />}
        {showPage && <Hero />}
      </section>
    </>
  );
};

export default Home;
