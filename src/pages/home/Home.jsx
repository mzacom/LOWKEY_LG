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
    // Check if the animations have already been shown
    if (!localStorage.getItem('animationsShown')) {
      // If not, show the animations
      setShowPage(true);
    } else {
      // If they have been shown, don't show them again
      setShowPage(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    // When the animations complete, set a flag in localStorage
    localStorage.setItem('animationsShown', 'true');
    // Optionally, you can force a re-render or navigate away to see the change
    // For example, using a router to navigate to the same route would cause a re-render
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

export default Home;
