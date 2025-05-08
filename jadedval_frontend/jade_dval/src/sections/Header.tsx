import { navLinks } from "@/constants";
import Button from "@/components/Button";
import { logo } from "@/assets/images";
import Menu from "@/assets/icons/menu.svg?react";
import Close from "@/assets/icons/close.svg?react";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className=" py-4 section-px section-mx">
      <nav className="flex max-md:justify-between items-center">
        <div className="">
          <img
            src={logo}
            alt="Jade D'val"
            className="w-[80px] h-[43px]"
            width={80}
            height={43}
          />
        </div>
        
        {/* desktop view nav */}
        <div className="ml-auto md:flex hidden gap-4 justify-center items-center">
          <ul className="flex gap-4 max-[1140px]:hidden">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-brand transition text-white"
              >
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
          <Button
            outline
            borderColor="brand"
            children="Partner with Us"
            className="px-2 py-1.5 text-white active:scale-95 transition-all hover:border-brand "
          />
          <Button
            children="Enroll"
            bgColor="bg-white"
            className="font-semibold px-4 py-1.5 text-brand active:scale-95 transition-all hover:text-white hover:bg-brand"
          />
        </div>

        {/* mobile view nav */}
        <div className="max-[1140px]:flex hidden relative ml-4">
          <button
            type="button"
            className="p-2 h-[34px] w-[34px] flex justify-center items-center rounded-md text-white max-md:bg-brand"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? <Close /> : <Menu />}
          </button>
          {toggle && (
            <div className="sidebar absolute z-10 py-3 px-6 top-10 right-0 sm:text-black text-black rounded-lg bg-white/30 backdrop-blur-md border border-brand/30">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li key={index} className="hover:text-brand transition-all max-md:text-black text-white">
                    <a href={link.path}> {link.label} </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  outline
                  borderColor="brand"
                  children="Partner"
                  className="px-2 py-1 active:scale-95 sm:text-white hover:text-brand"
                />
                <Button
                  children="Enroll"
                  className="font-semibold py-1 px-2 active:scale-95 hover:bg-white text-white hover:text-brand transition-all "
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
