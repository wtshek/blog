"use client";

import clsx from "clsx";
import Image from "next/image";

import filterIcon from "../../../public/svg/filter.svg";
import navigationIcon from "../../../public/svg/navigation-variant.svg";

const mobileNavbarButtons = [
  {
    icon: filterIcon,
    key: "filter",
    onClick: () => {
      console.log("on filter click");
    },
  },
  {
    icon: navigationIcon,
    key: "navigation",
    onClick: () => {
      console.log("on navigation click");
    },
    className: "md:hidden",
  },
];

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
  return (
    <>
      <nav className="padding-x pt-[30px] pb-[7.9vw] flex justify-between">
        <div>Logo</div>
        <div className="invisible md:visible flex">
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
      </nav>
      <div className="fixed bottom-10 padding-x flex justify-between w-full">
        {mobileNavbarButtons.map(({ icon, key, onClick, className }) => (
          <button
            className={clsx(
              "w-[15.6vw] h-[15.6vw] max-w-[60px] max-h-[60px] rounded-full shadow-2xl flex justify-center items-center md:w-[11vw] md:h-[11vw] md:max-w-[85px] md:max-h-[85px]",
              className
            )}
            key={key}
            onClick={onClick}
          >
            <Image priority src={icon} alt="filter icon" />
          </button>
        ))}
      </div>
    </>
  );
};
