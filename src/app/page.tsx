import Image from "next/image";

import arrowIcon from "../../public/svg/arrow-right.svg";

export default function Home() {
  return (
    <main className="padding-x">
      <div className="flex justify-between">
        <div className="text-sm lg:text-base leading-6">
          Hi there, <br />
          <div className="mt-5">
            I am a <br />
            <span className="font-marker">Writer</span> <br />
            <span className="font-marker">Web Developer</span> <br />
            <span className="font-marker">Life Long Learner</span> <br />
            who specialized in
            <span className="text-primary"> Gaining Experience</span>
          </div>
        </div>
        <div className="hidden lg:block bg-gray-400 w-[231px] h-[256px]"></div>
      </div>
      <div className="lg:hidden w-full rounded-3xl bg-primary py-3 px-4 flex items-center flex-col mt-[75px]">
        <div className="w-[17.8vw] h-[17.8vw] bg-gray-500 rounded-full"></div>
        <div className="text-white text-sm mt-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          volutpat ipsum vel justo commodo blandit. Proin consequat lorem quis
          mi sagittis luctus. Etiam quis hendrerit arcu. Aenean convallis,
          ligula nec auctor venenatis, mi velit interdum felis, eu scelerisque
          sem libero vitae mauris. Sed id molestie ipsum.
        </div>
      </div>
      <div className="mt-[82px] grid lg:grid-cols-2">
        <div className="w-full rounded-3xl bg-secondary py-3 px-4 text-sm lg:text-base">
          <div className="text-xl md:text-2xl font-semi-bold">Lorem</div>
          <div className="my-[11px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eleifend, urna eget rhoncus pellentesque,
          </div>
          <div>
            <div className="underline text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="underline text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="underline text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="flex items-center mt-1">
            View More <Image src={arrowIcon} alt="arrow icon" />
          </div>
        </div>
      </div>
    </main>
  );
}
