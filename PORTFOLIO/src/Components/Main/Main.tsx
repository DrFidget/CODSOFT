// import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Pic from "../../images/avatar.png";
// import styles from "./MainPart.module.css";

const Main = () => {
  return (
    <>
      <div className="lg:w-fit lg:h-screen grid gap-5 grid-cols-1 md:m-0 lg:grid-cols-2 lg:overflow-hidden bg-black min-w-full">
        <div className="ms-10 p-4 gap-1 flex pt-10 sm:pt-52 flex-col h-fit">
          <div className=" ps-5 text-white flex p-0 items-center h-fit xl:text-c6 lg:text-c8 text-c8 font-bold font-Name">
            I'm
          </div>
          <div className="ps-5 text-white flex p-0 items-center h-fit xl:text-c2 lg:text-c5 text-c6 font-bold leading-none font-Name">
            Ahmad Hassan
          </div>
          <div
            className="ps-5 flex font-TypeWriter text-normal md:text-c7 p-0 items-center h-fit"
            style={{ color: "#0f0" }}
          >
            <Typewriter
              words={[
                "Computer Scientist",
                "Software Developer",
                "Self Motivated",
              ]}
              cursor
              loop={0}
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="ps-5 text-white flex p-0 items-center h-fit font-mono text-xl pe-5">
            Dedicated tech enthusiast embarking on an epic journey to explore
            the boundless realms of digital innovation.
          </div>
        </div>
        <div className="flex items-center justify-center bg-black md:ps-5">
          <img src={Pic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
