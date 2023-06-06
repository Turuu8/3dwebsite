import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[18px] text-white font-bold">Turuu</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((el, i) => (
            <li
              key={i}
              onClick={() => setActive(el.title)}
              className={`${
                active === el.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer duration-100`}
            >
              <a href={`#${el.id}`}>{el.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? " hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks.map((el, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(el.title);
                  }}
                  className={`${
                    active === el.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-medium font-poppins cursor-pointer duration-100`}
                >
                  <a href={`#${el.id}`}>{el.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
