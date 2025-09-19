import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel = ({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 4000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getOffset = (index: number) => {
    const length = testimonials.length;
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
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="relative w-full min-h-[410px] bg-black flex flex-col items-center justify-center px-2 sm:px-4 ">
      {/* Cards */}
      <div className="relative w-full max-w-6xl h-[300px] flex items-center justify-center z-10">
        {testimonials.map((t, i) => {
          const offset = getOffset(i);
          const absOffset = Math.abs(offset);
          if (absOffset > 4) return null;

          const scale = 1 - absOffset * 0.1;
          const translateX = offset * 80;
          const opacity = absOffset > 3 ? 0 : 1;
          const zIndex = 10 - absOffset;

          return (
            <div
              key={t.id}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <div className="bg-gradient-to-tl from-accent to-primaryC p-[2px] cursor-pointer duration-300 hover:scale-105 rounded-[2rem]">
                <div className="relative bg-black rounded-[2rem] px-4 sm:px-6 md:px-8 py-6 w-[82vw] xs:w-[76vw] sm:w-[440px] md:w-[500px] lg:w-[600px] h-[300px] flex flex-col gap-5">
                  {offset === 0 ? (
                    <>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-white object-cover"
                          />
                          <div>
                            <h3 className="text-white text-lg sm:text-xl font-bold">
                              {t.name}
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm">
                              {t.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-1 mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-[14px]  sm:text-xl ${
                                i < t.rating
                                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
                                  : "text-gray-600"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mt-4">
                        {t.content}
                      </p>
                      <div className="w-[90%] h-2 bg-gradient-to-tl bottom-6 absolute blur-xl from-accent to-primaryC shadow-accent" />
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

      {/* Arrows + Dots */}
      <div className="flex items-center justify-center mt-6 gap-4 z-20 ">
        {/* Left Arrow */}
        <button className="hover:cursor-pointer" onClick={prevSlide}>
          <svg
            className="w-6 h-6 max-sm:w-5 max-sm:h-5 rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.478 13.5568H2.92432V10.4428H15.478L10.6633 5.31571L12.7311 3.11377L21.0757 11.9998L12.7311 20.8858L10.6633 18.6838L15.478 13.5568Z"
              fill="#999999"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 max-sm:h-2 max-sm:w-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-purple-500 scale-125 shadow-md"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button className="hover:cursor-pointer" onClick={nextSlide}>
          <svg
            className="w-6 h-6 max-sm:w-5 max-sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.478 13.5568H2.92432V10.4428H15.478L10.6633 5.31571L12.7311 3.11377L21.0757 11.9998L12.7311 20.8858L10.6633 18.6838L15.478 13.5568Z"
              fill="#999999"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
