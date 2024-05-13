import React, { useState, useEffect, Suspense } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import heroTruck from "../assets/heroTruck.png"; // Ensure this path is correct
import IntoBtns from "./IntoBtns";

const Hero = () => {
  // Placeholder image for suspense fallback
  const Placeholder = () => <div className="placeholder"></div>;

  // Image component that will be revealed after 3 seconds
  const ImageComponent = ({ src, alt }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // Delay of 1 second

      return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return isVisible ? (
      <motion.img
        src={src}
        alt={alt}
        className="truck-animation"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} // Faster animation (1 second)
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
        <section
          className={`${styles.heroPaddingY} flex flex-col md:flex-row items-center `}
        >
          {/* Phase 1 */}
          <div>
            <motion.div
              initial={{ y: "-10vh" }} // Start from above the viewport
              animate={{ y: 0 }} // End at the current position
              transition={{ type: "spring", stiffness: 50 }}
              className={`text-[13px] sm:text-xl font-medium`}
            >
              Welcome to <span className="text-[lime] font-bold ">LOWKEY</span> Logistics
            </motion.div>
            <motion.div
              initial={{ y: "3vh" }} // Start from above the viewport
              animate={{ y: 0 }} // End at the current position
              transition={{ type: "spring", stiffness: 50 }}
              className={`${styles.boldText150} sm:w-[60%] md:w-[90%] mt-3 `}
            >
              Transparent Courier & Logistics Designed to Help Grow Your
              Business.
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-2 sm:w-[60%] text-slate-600"
              >
                Your partner for exceptional logistics and courier services. Get
                transparent pricing, peace of mind, accelerated business growth,
                and 60-minute collection anywhere in the UK – request a quote now.
              </motion.p>

                {/* Into Buttons */}
          <section className={`w-full ${styles.hidden2} `} >
            <IntoBtns/>
          </section>
          </div>

          {/* Into Buttons */}
          <section className={`w-full ${styles.hidden} `} >
            <IntoBtns/>
          </section>

          {/* Drive in truck */}
          <div className="App sm:w-[1000px] ">
            <Suspense fallback={<Placeholder />}>
              <ImageComponent
                className="  h-auto "
                src={heroTruck}
                alt="Your Image"
              />
            </Suspense>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
