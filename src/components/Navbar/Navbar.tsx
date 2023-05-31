"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import arrowIcon from "../../../public/svg/chevron-right.svg";

const navbarItems = [
  {
    key: "home",
    label: "Home",
    href: "/",
  },
  {
    key: "articles",
    label: "Articles",
    href: "/",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/",
  },
];

export const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const onOpenNavbarItemClick = () => {
    setIsNavMenuOpen(true);
  };

  const onCloseNavbarClick = () => {
    setIsNavMenuOpen(false);
  };

  return (
    <>
      <nav className="padding-x pt-[30px] pb-[7.9vw] flex justify-between">
        <div>Logo</div>
        <div className="invisible lg:visible flex">
          {/* TODO: change to next link */}
          {navbarItems.map((item, index) => (
            <div
              key={item.key}
              className={clsx({
                "ml-[3vw]": index !== 0,
              })}
            >
              {item.label}
            </div>
          ))}
        </div>
        {/* mobile main menu navigation */}
        <div
          className={clsx(
            "lg:invisible fixed w-screen h-screen top-0 left-0 flex translate-x-[85vw] min-[400px]:translate-x-[90vw] min-[651px]:translate-x-[92vw] min-[880px]:translate-x-[94vw] transition-transform	",
            {
              "!translate-x-0": isNavMenuOpen,
            }
          )}
        >
          <div
            className={clsx(
              "absolute top-0 left-0 translate-x-full w-screen h-screen",
              { "translate-x-0": isNavMenuOpen }
            )}
            onClick={onCloseNavbarClick}
          />
          <button
            className={clsx(
              "bg-white shadow-md px-4 flex items-center justify-start h-[74px] z-10 rounded-l-full mt-[80vh]"
            )}
            onClick={onOpenNavbarItemClick}
          >
            <Image priority src={arrowIcon} alt="filter icon" />
          </button>
          <div
            className={clsx(
              "bg-primary h-full w-full text-white padding-x py-4 z-20 flex flex-col items-start pl-16 justify-center"
            )}
          >
            {navbarItems.map((item, index) => (
              <button
                key={item.key}
                className={clsx({
                  "text-2xl md:text-3xl bold": true,
                  "mt-10": index !== 0,
                })}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
