import { React, useState } from "react";
import styles from "../style";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  // Nav Toggle
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className={`${styles.spaceBtw} `}>
        {/* logo */}

        <p
          className={`${styles.boldText} ${styles.greyBg} ${styles.blackTx} ${styles.btnPadding}  `}
        >
          LOWKEY
        </p>

        <i
          onClick={() => setToggle(!toggle)}
          class={`fa-solid ${
            toggle ? "fa-xmark " : "fa-ellipsis-vertical "
          } text-3xl font-extrabold ${styles.hidden} `}
        ></i>
      </section>

      {/* Nav bar Elements */}

      <section
        className={` ${styles.hidden} z-[200] gap-3 sidebar card ${
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
        } bg-none `}
      ></div>
    </>
  );
};

export default NavBar;
