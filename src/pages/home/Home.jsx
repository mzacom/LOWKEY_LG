import { React, useEffect, useState } from "react";
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

  const handleAnimationComplete = () => {
    setShowPage(true);
  };

  return (
    <>
      {/* Section A (Navbar and Hero section)  */}
      <section className={` ${styles.section}  `}>
        {!showPage && <CarAnimation onComplete={handleAnimationComplete} />}
        {!showPage && <TextAnimation onComplete={handleAnimationComplete} />}
        {showPage && <NavBar />}
        {showPage && <Hero />}
      </section>
    </>
  );
};

export default Home