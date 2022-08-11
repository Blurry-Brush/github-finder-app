import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import GLOBE from "vanta/dist/vanta.globe.min";
import { gsap } from "gsap";

function About() {
  const [vantaEffect, setVantaEffect] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          color: 0xf7ae,
          backgroundColor: 0x2e2b3e,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  //animations

  const circleRef = useRef();
  const q = gsap.utils.selector(circleRef);

  useLayoutEffect(() => {
    gsap.from(q(".circle"), {
      x: -300,
      stagger: 0.33,
      duration: 1,
      ease: "elastic.out",
      delay: 0.5,
    });
    gsap.to(q(".circle"), {
      y: -10,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      delay: 3,
    });
  }, []);

  return (
    <div
      ref={myRef}
      className="bg-white lg:h-[600px] absolute top-[11%] -m-3 h-[600px] w-full"
    >
      <div
        ref={circleRef}
        className="bg-black/50 rounded w-[70%]  mx-auto h-[500px] lg:h-[500px] mt-10 max-w-lg flex flex-col p-4 items-center gap-5"
      >
        <div className="flex justify-center mt-2">
          <img
            className="w-20 h-auto rounded-full ring-4"
            src="https://avatars.githubusercontent.com/u/89006056?v=4"
            alt="profile-pic"
          ></img>
        </div>
        <h1 className="font-semibold text-xl lg:text-3xl tracking-wider mt-2 text-white/70">
          Yuvraj Singh
        </h1>
        <h1 className="font-semibold text-lg"> Made with -</h1>
        <div className="flex gap-4">
          <div>
            {" "}
            <FaReact size="40" className="text-cyan-500 animate-spin" />
          </div>
          <div className="">
            {" "}
            <SiTailwindcss size="40" className="text-blue-500" />
          </div>
        </div>

        <h1 className="font-semibold text-lg mt-7"> My Socials</h1>
        <div className="flex lg:gap-5 lg:mt-5">
          <div className="first-two mr-2 flex gap-2 lg:gap-7 ">
            <div className="circle">
              <SocialIcon
                className={
                  "hover:scale-110 transition-all duration-400 linkedin "
                }
                url="https://www.linkedin.com/in/yuvraj-singh-b05323216/"
                style={{ height: 50, width: 50 }}
              />
            </div>

            <div className="circle">
              <SocialIcon
                className={
                  "hover:scale-110 transition-all duration-400 instagram "
                }
                url="https://www.instagram.com/yuwuxj/"
                fgColor={"#fff"}
                style={{ height: 50, width: 50 }}
              />
            </div>

            <div className="circle">
              <SocialIcon
                className={"hover:scale-110 transition-all duration-400 "}
                url="https://discord.com/users/689067290154762267"
                style={{ height: 50, width: 50 }}
              />
            </div>

            <div className="circle">
              <SocialIcon
                className={"hover:scale-110 transition-all duration-400 "}
                url="https://github.com/Blurry-Brush"
                bgColor={"#C689C6"}
                style={{ height: 50, width: 50 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
