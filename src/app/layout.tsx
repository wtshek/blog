import config from "@/config.json";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import "react-notion-x/src/styles.css";

import instagram from "../../public/svg/instagram.svg";
import linkedIn from "../../public/svg/linkedin.svg";
import twitter from "../../public/svg/twitter.svg";
import "./globals.css";

const menuItems = [
  { key: "/", label: "Home" },
  { key: "/posts", label: "Articles" },
  { key: "/books", label: "Books" },
];

const mappingMenuItems = () =>
  menuItems.map((item, index) => (
    <Link href={item.key} key={item.key}>
      <div
        className={clsx({
          "ml-4": index !== 0,
        })}
      >
        {item.label}
      </div>
    </Link>
  ));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="text-p flex flex-col min-h-[100vh]">
          <nav className="padding-x bg-primary py-4 ">
            <div className="lg:max-w-[930px] flex justify-between items-center m-auto">
              <Link href="/">
                <div className="border-grey border-2 text-bold rounded-full w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] flex items-center justify-center">
                  WTS
                </div>
              </Link>

              <div className="flex">{mappingMenuItems()}</div>
            </div>
          </nav>
          {children}
          <footer className="bg-primary padding-x py-[35px] mt-auto">
            <div className="lg:max-w-[930px] m-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              <div>
                <div className="mb-5">
                  Wing Tung Shek {new Date().getFullYear()}. All right reserved
                </div>
                <div className="hidden lg:flex">{mappingMenuItems()}</div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <Link href={config.linkedIn}>
                  <Image alt="linkedIn" src={linkedIn} />
                </Link>
                <Link href={config.twitter}>
                  <Image alt="twitter" src={twitter} />
                </Link>
                <Link href={config.instagram}>
                  <Image alt="instagram" src={instagram} />
                </Link>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
