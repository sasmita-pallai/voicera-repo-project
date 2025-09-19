import { Link } from "react-router-dom";
import { IconButton } from "./utils/IconButton";

const Footer = () => {
  return (
    <> 
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4B4B4B] to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-indigo-500/10 animate-pulse"></div>
      </div>
      <footer className="relative z-10 bg-black pt-16 dark:bg-black md:pt-20 lg:pt-24 overflow-hidden">
        <div className="relative z-10 mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:px-30 text-xs">
            <div className="lg:w-1/5 px-4 lg:mr-10 w-full text-left">
              <div className="mb-12 w-auto lg:mb-16 group">
                {/* Logo Section */}
                <Link to="/" className="mb-8 inline-block group/logo ">
                  <div className="flex items-center gap-4 ">
                    <div className="relative overflow-hidden rounded-xl group-hover/logo:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <img src="/images/logo/logo.png" alt="logo" />
                    </div>
                    <div className="font-semibold text-4xl text-white">Voicera</div>
                  </div>
                </Link>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/frisson_devhub/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social"
                  >
                    <IconButton className="hover:scale-110 transition-all duration-300 cursor-pointer w-10 h-10">
                      {/* Instagram SVG */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/social:scale-110">
                        <path d="M12 2.1626C15.204 2.1626 15.5844 2.1714 16.8492 2.2254C18.048 2.2764 18.7512 2.4738 19.2708 2.6772C19.8708 2.9106 20.3256 3.2082 20.7912 3.6738C21.2568 4.1394 21.5556 4.5936 21.7884 5.1936C21.9918 5.7132 22.1892 6.4164 22.2402 7.6152C22.2942 8.88 22.3032 9.2604 22.3032 12.4644C22.3032 15.6684 22.2942 16.0488 22.2402 17.3136C22.1892 18.5124 21.9918 19.2156 21.7884 19.7352C21.5556 20.3352 21.2568 20.79 20.7912 21.2556C20.3256 21.7212 19.8708 22.0194 19.2708 22.2528C18.7512 22.4562 18.048 22.6536 16.8492 22.7046C15.5844 22.7586 15.204 22.7676 12 22.7676C8.796 22.7676 8.4156 22.7586 7.1508 22.7046C5.952 22.6536 5.2488 22.4562 4.7292 22.2528C4.1292 22.0194 3.6744 21.7212 3.2088 21.2556C2.7432 20.79 2.445 20.3352 2.2116 19.7352C2.0082 19.2156 1.8108 18.5124 1.7598 17.3136C1.7058 16.0488 1.6968 15.6684 1.6968 12.4644C1.6968 9.2604 1.7058 8.88 1.7598 7.6152C1.8108 6.4164 2.0082 5.7132 2.2116 5.1936C2.445 4.5936 2.7432 4.1394 3.2088 3.6738C3.6744 3.2082 4.1292 2.9106 4.7292 2.6772C5.2488 2.4738 5.952 2.2764 7.1508 2.2254C8.4156 2.1714 8.796 2.1626 12 2.1626ZM12 0C8.7348 0 8.3232 0.0108 7.0392 0.0648C5.766 0.1188 4.8384 0.324 4.044 0.6132C3.2148 0.9156 2.5272 1.308 1.8516 1.9836C1.176 2.6592 0.7836 3.3468 0.4812 4.176C0.192 4.9704 -0.0132 5.898 -0.0672 7.1712C-0.1212 8.4552 -0.132 8.8668 -0.132 12.132C-0.132 15.3972 -0.1212 15.8088 -0.0672 17.0928C-0.0132 18.366 0.192 19.2936 0.4812 20.088C0.7836 20.9172 1.176 21.6048 1.8516 22.2804C2.5272 22.956 3.2148 23.3484 4.044 23.6508C4.8384 23.94 5.766 24.1452 7.0392 24.1992C8.3232 24.2532 8.7348 24.264 12 24.264C15.2652 24.264 15.6768 24.2532 16.9608 24.1992C18.234 24.1452 19.1616 23.94 19.956 23.6508C20.7852 23.3484 21.4728 22.956 22.1484 22.2804C22.824 21.6048 23.2164 20.9172 23.5188 20.088C23.808 19.2936 24.0132 18.366 24.0672 17.0928C24.1212 15.8088 24.132 15.3972 24.132 12.132C24.132 8.8668 24.1212 8.4552 24.0672 7.1712C24.0132 5.898 23.808 4.9704 23.5188 4.176C23.2164 3.3468 22.824 2.6592 22.1484 1.9836C21.4728 1.308 20.7852 0.9156 19.956 0.6132C19.1616 0.324 18.234 0.1188 16.9608 0.0648C15.6768 0.0108 15.2652 0 12 0Z" fill="currentColor" />
                        <path d="M12 5.89258C8.6388 5.89258 5.89258 8.6388 5.89258 12C5.89258 15.3612 8.6388 18.1074 12 18.1074C15.3612 18.1074 18.1074 15.3612 18.1074 12C18.1074 8.6388 15.3612 5.89258 12 5.89258ZM12 15.804C10.0524 15.804 8.4708 14.2224 8.4708 12.2748C8.4708 10.3272 10.0524 8.7456 12 8.7456C13.9476 8.7456 15.5292 10.3272 15.5292 12.2748C15.5292 14.2224 13.9476 15.804 12 15.804Z" fill="currentColor" />
                        <path d="M19.7715 5.5383C20.3607 5.5383 20.8383 5.0607 20.8383 4.4715C20.8383 3.8823 20.3607 3.4047 19.7715 3.4047C19.1823 3.4047 18.7047 3.8823 18.7047 4.4715C18.7047 5.0607 19.1823 5.5383 19.7715 5.5383Z" fill="currentColor" />
                      </svg>
                    </IconButton>
                  </a>

                  <a
                    href="https://x.com/FrissonDevhub"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social"
                  >
                    <IconButton className="hover:scale-110 transition-all duration-300 cursor-pointer w-10 h-10">
                      {/* Twitter SVG */}
                      <svg width="18" height="18" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/social:scale-110">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                          fill="currentColor"
                        />
                      </svg>
                    </IconButton>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61560392654095"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social"
                  >
                    <IconButton className="hover:scale-110 transition-all duration-300 cursor-pointer w-10 h-10">
                      {/* Facebook SVG */}
                      <svg width="18" height="18" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/social:scale-110">
                        <path
                          d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </IconButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Link Sections */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4  lg:gap-8">
              <div className="w-full">
                <div className="mb-12 lg:mb-16 group">
                  <h2 className="mb-10  text-xl font-bold text-start text-white group-hover:text-blue-600 transition-colors duration-300 relative">
                    Company
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                  </h2>
                  <ul className="space-y-2 flex flex-col items-start">
                    <li>
                      <Link
                        to="/case-study"
                        className="inline-block text-base text-white duration-300 hover:text-blue-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          About
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="inline-block text-base text-white duration-300 hover:text-blue-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Press
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="inline-block text-base text-white duration-300 hover:text-blue-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Why Voicera
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <div className="mb-12 lg:mb-16 group">
                  <h2 className="mb-10  text-xl font-bold text-start text-white group-hover:text-indigo-600 transition-colors duration-300 relative">
                    Resources
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </h2>
                  <ul className="space-y-2 flex flex-col items-start">
                    <li>
                      <Link
                        to="/"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Blog
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          For creators
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          For members
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <div className="mb-12 lg:mb-16 group">
                  <h2 className="mb-10  text-xl font-bold text-start text-white group-hover:text-indigo-600 transition-colors duration-300 relative">
                    Useful links
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </h2>
                  <ul className="space-y-2 flex flex-col items-start">
                    <li>
                      <Link
                        to="/contact"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Advertising on Voicera
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Vendors
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Support
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <div className="mb-12 lg:mb-16 group">
                  <h2 className="mb-10  text-xl font-bold text-start text-white group-hover:text-indigo-600 transition-colors duration-300 relative">
                    Terms of Use
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </h2>
                  <ul className="space-y-2 flex flex-col items-start">
                    <li>
                      <Link
                        to="/contact"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Privacy Policy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Cookies Settings
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="inline-block text-base text-white duration-300 hover:text-indigo-600 group/link relative"
                      >
                        <span className="flex justify-center items-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          Compliance Policy
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4B4B4B] to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-indigo-500/10 animate-pulse"></div>
          </div>

          <div className="py-8 group">
            <p className="text-center text-xs lg:text-base text-[#4B4B4B] group-hover:text-gray-300 transition-colors duration-300">
              Copyright © 2025 VoiceraInc. All right reserved. About Us Support Blog Terms Privacy Cookie Policy
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
