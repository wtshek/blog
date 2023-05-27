"use client";
import filterIcon from "../../../public/svg/filter.svg";
import navigationIcon from "../../../public/svg/navigation-variant.svg";
import Image from "next/image";

export const Navbar = () => {
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
    },
  ];

  return (
    <>
      <nav className="padding-x py-[30px]">Logo</nav>
      <div className="fixed bottom-10 padding-x flex justify-between w-full">
        {mobileNavbarButtons.map(({ icon, key, onClick }) => (
          <button
            className="w-[15.6vw] h-[15.6vw] rounded-full shadow-2xl flex justify-center items-center"
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
