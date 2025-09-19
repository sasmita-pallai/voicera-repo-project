import { Header } from "../Header";
import { OutlinedButton } from "../utils/OutlinedButton";
import Carousel3D from "../carousel/Carousel3D";
import { useState } from "react";
import { Button } from "../utils/MainButton/Button";
import { Link } from "react-router-dom";

function Section1() {
const images = [
  { id: 1, src: "/images/Section1_Images/main.png", alt: "Colorful event ticket illustration" },
  { id: 2, src: "/images/Section1_Images/robot-hand.png", alt: "robot hand " },
  { id: 3, src: "/images/Section1_Images/space-object.png", alt: "space-object" },
  { id: 4, src: "/images/Section1_Images/mic.png", alt: "mic" },
];


  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="pt-4 max-lg:pt-0 bg-gradient-to-r from-accent/20 via-black to-primaryC/20">
      <div className="w-full min-h-full">
        <div className="px-4 max-lg:hidden">
          <Header />
        </div>

        <div className="bg-gradient-to-r from-primaryC to-accent w-full absolute top-0 p-[2px] min-lg:hidden">
          <div
            className={`bg-black h-14 transition-all duration-500 overflow-hidden ${
              collapsed ? "h-85" : "flex flex-col"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex gap-3.5 justify-center items-center pl-2">
                <img src="/assets/Icons/Voicera.svg" alt="" />
                <p className="text-md font-bold">Voicera</p>
              </div>
              <OutlinedButton
                className="min-w-0 w-8 h-8 rounded-[8px]"
                InnerClass="rounded-[6px] p-0"
                onClick={() => setCollapsed(!collapsed)}
              >
                {!collapsed ? (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 12C4.5 11.1716 5.17157 10.5 6 10.5C6.82843 10.5 7.5 11.1716 7.5 12C7.5 12.8284 6.82843 13.5 6 13.5C5.17157 13.5 4.5 12.8284 4.5 12ZM10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12ZM16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                      fill="white"
                    />
                  </svg>
                )}
              </OutlinedButton>
            </div>
            {collapsed && (
              <div className="flex flex-col items-center gap-2">
                <svg
                  width="408"
                  height="1"
                  viewBox="0 0 408 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="408" y2="0.5" stroke="#666666" />
                </svg>
                <div
                  className={`font-primary flex flex-col w-full gap-2 px-4 items-start`}
                >
                  <p>Home</p>
                  <p>Ai Assistant</p>
                  <p>Customers</p>
                  <p>Pricing</p>
                  <p>Contact</p>
                </div>
                <div className="flex flex-col items-start w-full px-4 gap-2">
                  <Button
                    size="xs"
                    className="text-xs min-w-10 h-6.5 font-light"
                  >
                    <Link to="/login">
                      Login
                    </Link>
                  </Button>
                  <Button
                    size="xs"
                    className="text-xs min-w-10 h-6.5 font-light"
                  >
                    Sign Up
                  </Button>
                </div>
                <div className="w-full flex justify-end px-4">
                  <OutlinedButton className="p-[2px] h-9">
                    Contact Us
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.375 7.09253C18.1117 7.32957 18.625 8.03267 18.625 8.84018V12.4115C18.625 13.3587 17.9188 14.1619 16.9748 14.2389C16.6923 14.262 16.4091 14.2821 16.125 14.2994V16.875L13.625 14.375C12.4969 14.375 11.3797 14.329 10.2752 14.2388C10.0266 14.2186 9.7945 14.1479 9.58745 14.0375M17.375 7.09253C17.2488 7.05193 17.1161 7.025 16.9783 7.01356C15.8727 6.9218 14.7543 6.875 13.625 6.875C12.4957 6.875 11.3773 6.9218 10.2717 7.01356C9.32916 7.09179 8.625 7.89436 8.625 8.84018V12.4114C8.625 13.1092 9.00822 13.7288 9.58745 14.0375M17.375 7.09253V5.53109C17.375 4.17991 16.4152 3.00887 15.0753 2.83492C13.3732 2.61396 11.6375 2.5 9.87524 2.5C8.11278 2.5 6.37694 2.61399 4.6747 2.83499C3.33477 3.00895 2.375 4.17998 2.375 5.53115V10.7189C2.375 12.07 3.33478 13.2411 4.6747 13.415C5.15551 13.4774 5.63899 13.5313 6.125 13.5765V17.5L9.58745 14.0375"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </OutlinedButton>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex flex-col items-center text-center transition-all duration-300 ${
            collapsed ? "pt-33" : "pt-20"
          }`}
        >
          <p className="text-3xl sm:text-5xl font-bold font-primary">
            NEXT LEVEL
          </p>
          <p className="text-3xl sm:text-5xl font-bold font-primary bg-gradient-to-r from-primaryC to-accent bg-clip-text text-transparent">
            COMMUNICATION
          </p>
          <p className="text-3xl sm:text-5xl font-bold font-primary">
            MADE SIMPLE
          </p>

          <p className="text-base sm:text-xl pt-4 py-1 px-2 font-secondary">
            Empower your team with scalable voice, messaging, and Connectivity
          </p>
          <p className="text-base sm:text-xl px-2 max-w-xl font-secondary">
            APIs — all from a single, developer-first platform
          </p>

          <div className="sm:w-2/3 max-sm:w-2/3 bg-gradient-to-r from-primaryC to-accent h-1.5 rounded-4xl mt-4"></div>

          <OutlinedButton className="mt-4 flex items-center gap-2">
            Start Today
            <img
              src="/assets/Icons/click.svg"
              alt="Click icon"
              className="w-5 h-5"
            />
          </OutlinedButton>
        </div>

        <div className="overflow-hidden">
          <Carousel3D images={images} autoplayInterval={4000} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
