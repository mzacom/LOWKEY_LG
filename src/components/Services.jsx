import React, { useEffect, useState } from "react";
import styles from "../style";
import { deliverToday } from "../assets";

const Services = () => {
  return (
    <>
      <section
        className={`${styles.paddingX} ${styles.whiteBg} items-center py-[2rem]`}
      >
        <p className=" mb-4  text-center font-bold text-2xl">Our Services</p>

        <section className={`h-[auto] w-full ${styles.paddingY} flex`}>

          <div className="w-full flex justify-center gap-7 items-center h-auto flex-col lg:flex-row  ">
            {/* Phase one  */}
            <div className=" w-full flex flex-col justify-center items-center ">
              <div
                className={`relative   pt-5  flex justify-center gap-[2rem] flex-col items-center  rounded-t-2xl   cursor-pointer shadow-lg`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${deliverToday})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  width: "90%",
                  color: "white",
                }}
              >
                {/* Content goes here */}{" "}
                <h1 className=" text-xl font-bold  ">Same Day Delivery</h1>
                <p className=" text-center text-xl font-thin ">
                  We provide fast and reliable same-day courier services for
                  industries including aerospace, automotive, manufacturing,
                  healthcare and more.
                </p>
              </div>

              <div
                className={` h-[40px] flex justify-center gap-2 w-[90%] shadow-lg font-bold items-center rounded-b-2xl ${styles.greyBg} `}
              >
                {/* Content goes here */}{" "}
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
              </div>
            </div>

            {/* Phase two  */}
            <div className=" w-full flex flex-col justify-center items-center ">
              <div
                className={`relative  pt-5  flex justify-center gap-[2rem] flex-col items-center  rounded-t-2xl   cursor-pointer shadow-lg`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${deliverToday})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  width: "90%",
                  color: "white",
                }}
              >
                {/* Content goes here */}{" "}
                <h1 className=" text-xl font-bold  ">Same Day Delivery</h1>
                <p className=" text-center text-xl font-thin ">
                  We provide fast and reliable same-day courier services for
                  industries including aerospace, automotive, manufacturing,
                  healthcare and more.
                </p>
              </div>

              <div
                className={` h-[40px] flex justify-center gap-2 w-[90%] shadow-lg font-bold items-center rounded-b-2xl ${styles.greyBg} `}
              >
                {/* Content goes here */}{" "}
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
              </div>
            </div>

            {/* Phase three  */}
            <div className=" w-full flex flex-col justify-center items-center ">
              <div
                className={`relative  pt-5  flex justify-center gap-[2rem] flex-col items-center  rounded-t-2xl   cursor-pointer shadow-lg`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${deliverToday})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  width: "90%",
                  color: "white",
                }}
              >
                {/* Content goes here */}{" "}
                <h1 className=" text-xl font-bold  ">Same Day Delivery</h1>
                <p className=" text-center text-xl font-thin ">
                  We provide fast and reliable same-day courier services for
                  industries including aerospace, automotive, manufacturing,
                  healthcare and more.
                </p>
              </div>

              <div
                className={` h-[40px] flex justify-center gap-2 w-[90%] shadow-lg font-bold items-center rounded-b-2xl ${styles.greyBg} `}
              >
                {/* Content goes here */}{" "}
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
                <span className="h-[10px] w-[10px] bg-black rounded-full"></span>
              </div>
            </div>

          </div>

        </section>
      </section>
    </>
  );
};

export default Services;
