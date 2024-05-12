import React, { useState, useEffect, Suspense } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import heroTruck from "../assets/heroTruck.png"; // Ensure this path is correct

const Hero = () => {
  // Placeholder image for suspense fallback
  const Placeholder = () => <div className="placeholder"></div>;

  // Image component that will be revealed after 3 seconds
  const ImageComponent = ({ src, alt }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Delay of 1 second

      return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return isVisible ? (
      <motion.img
        src={src}
        alt={alt}
        className="truck-animation"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }} // Faster animation (1 second)
      />
    ) : null;
  };

  return (
    <>
      <section
        id="home"
        className={`${styles.boxWidth} ${styles.paddingX} sm:pt-[5rem] pt-[4rem]`}
      >
        {/* first Section */}
        <section className={`${styles.heroPaddingY} flex flex-col `}>
          <motion.div
            initial={{ y: "-10vh" }} // Start from above the viewport
            animate={{ y: 0 }} // End at the current position
            transition={{ type: "spring", stiffness: 50 }}
            className={`text-[13px] sm:text-xl font-medium`}
          >
            Welcome to <span className="text-[lime]">LOWKEY</span> Logistics
          </motion.div>
          <motion.div
            initial={{ y: "3vh" }} // Start from above the viewport
            animate={{ y: 0 }} // End at the current position
            transition={{ type: "spring", stiffness: 50 }}
            className={`${styles.boldText150} sm:w-[40%] md:w-[60%] mt-3 `}
          >
            Transparent Courier & Logistics Designed to Help Grow Your Business.
          </motion.div>
          <p className=" mt-2 sm:w-[50%] text-slate-600 ">
            Your partner for exceptional logistics and courier services. Get
            transparent pricing, peace of mind, accelerated business growth, and
            60-minute collection anywhere in the UK – request a quote now.
          </p>

          <div className="App">
            <Suspense fallback={<Placeholder />}>
              <ImageComponent src={heroTruck} alt="Your Image" />
            </Suspense>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
