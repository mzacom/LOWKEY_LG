import { React, useState } from "react";
import styles from "../style";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  // Nav Toggle
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section
        className={`${styles.spaceBtw} z-[150] fixed w-full ${styles.whiteBg} ${styles.paddingY} `}
      >
        {/* logo */}

        <p
          className={`${styles.boldText} ${styles.limeBg} ${styles.blackTx} ${styles.btnPadding}  `}
        >
          LOWKEY
        </p>

        {/* Nav Bar list Desktop */}
        <section
          className={`  items-center flex ${styles.hidden2} gap-[4rem] `}
        >
          {navLinks.map((navs) => {
            return (
              <ul
                className={({ isActive }) =>
                  isActive ? `flex flex-row bg-[lime]` : "  "
                }
                key={navs.id}
              >
                <li>
                  <a href={`#${navs.id}`}>{navs.title}</a>
                </li>
              </ul>
            );
          })}

          {/* Bookings Shortcuts and Fleets */}
          <section
            className={`flex gap-2 ${styles.greyBg} p-1 px-4 rounded-full  `}
          >
            <NavLink
              to={"bookings"}
              className={({ isActive }) =>
                isActive
                  ? " bg-[lime] "
                  : " hover:bg-[lime] flex items-center rounded-full w-[40px] h-[40px] p-2 "
              }
            >
              <i class="fa-solid fa-book text-2xl "></i>
            </NavLink>
            <NavLink
              to={"bookings"}
              className={({ isActive }) =>
                isActive
                  ? " bg-[lime] "
                  : " hover:bg-[lime] flex items-center rounded-full w-[40px] h-[40px] p-2 "
              }
            >
              <i class="fa-solid fa-truck-fast text-2xl "></i>
            </NavLink>
          </section>
        </section>

        {/* Nav Shortcuts */}
        <div className={` flex items-center   gap-6 ${styles.hidden} `}>
          {/* Bookings Shortcuts and Fleets */}
          <section
            className={`flex gap-1 ${styles.greyBg} p-[6px] px-2 rounded-full  `}
          >
            <NavLink
              to={"bookings"}
              className={({ isActive }) =>
                isActive
                  ? " bg-[lime] "
                  : " hover:bg-[lime] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1 "
              }
            >
              <i class="fa-solid fa-book text-xl "></i>
            </NavLink>
            <NavLink
              to={"bookings"}
              className={({ isActive }) =>
                isActive
                  ? " bg-[lime] "
                  : " hover:bg-[lime] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1 "
              }
            >
              <i class="fa-solid fa-truck-fast text-xl "></i>
            </NavLink>
          </section>

          {/* Toggle button */}
          <i
            onClick={() => setToggle(!toggle)}
            class={`fa-solid ${
              toggle ? "fa-xmark ml-[-15px] " : "fa-ellipsis-vertical "
            } text-3xl font-extrabold ${styles.hidden} `}
          ></i>
        </div>
      </section>

      {/* Nav bar Elements */}
      <section
        className={` ${styles.hidden} z-[200] mt-[4rem] gap-3 sidebar card ${
          styles.boxWidth
        } p-[20px]  right-[20px] ${
          toggle ? " flex  " : " hidden "
        }  fixed flex-col  `}
      >
        {navLinks.map((navs) => {
          return (
            <ul key={navs.id} className=" text-2xl">
              <li
                id={navs.id}
                className={` hover:bg-[lime] w-full p-2 rounded-lg `}
              >
                {navs.title}
              </li>
            </ul>
          );
        })}
      </section>

      {/* ovelay */}
      <div
        onPointerEnter={() => setToggle(!toggle)}
        className={`${styles.hidden} w-full h-full  ${
          toggle ? "fixed z-[100] " : "hidden"
        } bg-none ${styles.hidden} `}
      ></div>
    </>
  );
};

export default NavBar;
