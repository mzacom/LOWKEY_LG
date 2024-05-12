import React, { useEffect, useState } from "react";
import {
  NavBar,
  Hero,
  About,
  Services,
  Why,
  Get,
  Footer,
} from "../../components";

import styles from "../../style";

const Home = () => {
  

  return (
    <>
      <section className={`${styles.section}`}>
    
        <NavBar />
        <Hero />
      </section>
    </>
  );
};

export default Home;
