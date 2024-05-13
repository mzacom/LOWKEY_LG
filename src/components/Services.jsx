import React, { useEffect, useState } from "react";
import styles from "../style";
import { deliverToday } from "../assets";

const Services = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false); // State to track if the image should be blurred

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePointerEnter = () => {
    setIsBlurred(true); // Apply the blur effect when the pointer enters
  };

  const handlePointerLeave = () => {
    setIsBlurred(false); // Remove the blur effect when the pointer leaves
  };

  return (
    <>
      <section
        className={`${styles.paddingX} ${styles.whiteBg} items-center py-[2rem]`}
      >
        {/* Service display Little */}
        <section className={`h-[auto] w-full ${styles.paddingY} flex`}>
          {/* Slider div, slide every 3 seconds */}
          <div className="w-full flex justify-center items-center h-auto flex-col  ">
            {isMounted ? (
              <>
                <div
                  className={`relative rounded-t-2xl ${
                    isBlurred ? "blur-overlay shadow-lg" : "shadow-lg"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${deliverToday})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    width: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                  onPointerEnter={handlePointerEnter}
                  onPointerLeave={handlePointerLeave}
                >
                  {/* Content goes here */}ww
                </div>
              </>
            ) : (
              <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-[300px] w-full rounded-t-2xl flex items-center justify-center">
                Our Servwww
              </div>
            )}
            <div
              className={` h-[40px] flex justify-center gap-2 w-[80%] shadow-lg font-bold items-center rounded-b-2xl ${styles.greyBg} `}
            >
              {/* Content goes here */}{" "}
              <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
              <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
              <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
