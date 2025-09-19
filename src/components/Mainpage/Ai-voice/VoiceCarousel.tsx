  import { useState, useEffect } from "react";
  import { Button } from "../../utils/MainButton/Button";

  interface VoiceProfile {
    id: number;
    name: string;
    description: string;
  }

  interface VoiceCarouselProps {
    voices: VoiceProfile[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
  }

  const VoiceCarousel = ({
    voices,
    autoPlay = false,
    autoPlayInterval = 4000,
  }: VoiceCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % voices.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? voices.length - 1 : prev - 1));
    };

    const getOffset = (index: number) => {
      const length = voices.length;
      let offset = index - currentIndex;
      if (offset > length / 2) offset -= length;
      if (offset < -length / 2) offset += length;
      return offset;
    };

    useEffect(() => {
      if (!autoPlay) return;
      const interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, currentIndex, voices.length]);

    return (
      <>
        {/* Embedded ripple animation */}
        <style>{`
          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
          .ripple {
            position: absolute;
            border-radius: 9999px;
            animation: ripple 2s infinite;
            border-width: 1px;
          }
          .ripple.delay-200 {
            animation-delay: 0.2s;
          }
          .ripple.delay-400 {
            animation-delay: 0.4s;
          }
        `}</style>

        <div className="relative w-full min-h-[410px] bg-black flex items-center justify-center px-2">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 z-30 rounded-md p-[2px] bg-gradient-to-r from-primaryC to-accent cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white rotate-180"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.478 13.5568H2.92432V10.4428H15.478L10.6633 5.31571L12.7311 3.11377L21.0757 11.9998L12.7311 20.8858L10.6633 18.6838L15.478 13.5568Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-6xl h-[300px] flex items-center justify-center z-10">
            {voices.map((voice, i) => {
              const offset = getOffset(i);
              const absOffset = Math.abs(offset);

              // Only show the 3 visible cards: offsets -1, 0, 1
              if (absOffset > 1) return null;

              // Adjust spacing for only 3 cards
              const scale = offset === 0 ? 1 : 0.85;
              const translateX = offset * 80; // More spacing for 3 cards
              const opacity = offset === 2 ? 1 : 0.8;
              const zIndex = 10 - absOffset;

              return (
                <div
                  key={voice.id}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="bg-gradient-to-tl from-accent to-primaryC p-[3px] h-100 rounded-[2rem] hover:scale-105 transition-transform duration-300">
                    <div
                      className={`relative overflow-hidden rounded-[2rem] px-6 py-6 w-[280px] sm:w-[300px] md:w-[340px] h-full flex flex-col items-center justify-center text-center text-white gap-4 ${
                        offset === 0 ? "bg-[#343434]" : "bg-[#343434]"
                      }`}
                    >
                      {/* Blur Background for Active Card */}
                      {offset === 0 && (
                        <div className="absolute inset-0 bg-[#343434]/70 backdrop-blur-md backdrop-saturate-150 z-0 rounded-[2rem]" />
                      )}

                      {offset === 0 ? (
                        <>
                          {/* Mic Icon with Ripple */}
                          <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                            <span className="ripple border-cyan-400 w-full h-full" />
                            <span className="ripple border-cyan-500 w-[85%] h-[85%] delay-200" />
                            <span className="ripple border-cyan-300 w-[70%] h-[70%] delay-400" />
                            <div className="z-10 w-16 h-16 bg-gradient-to-tr from-primaryC to-accent rounded-full flex items-center justify-center p-2">
                              <img
                                src="/assets/Icons/mic.svg"
                                alt="Mic Icon"
                                className="w-8 h-8"
                              />
                            </div>
                          </div>
                          <h3 className="z-10 text-xl font-bold">{voice.name}</h3>
                          <p className="z-10 text-sm text-gray-300 px-2">{voice.description}</p>
                          <Button variant="primary" size="xs" className="mt-10 h-8 font-bold text-[12px]">
                            Set Default
                          </Button>
                          <div className="z-10 absolute bottom-4 w-[80%] h-2 blur-2xl bg-gradient-to-tr from-primaryC to-accent opacity-50 rounded-full" />
                        </>
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 z-30 rounded-md p-[2px] bg-gradient-to-r from-accent to-primaryC cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.478 13.5568H2.92432V10.4428H15.478L10.6633 5.31571L12.7311 3.11377L21.0757 11.9998L12.7311 20.8858L10.6633 18.6838L15.478 13.5568Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </>
    );
  };

  export default VoiceCarousel;
