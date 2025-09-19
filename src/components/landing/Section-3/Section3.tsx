import Carousel from "./Carousel";
import TestimonialsArray from "./TestimonialsEx";

function Testimonials() {
  return (
    <div className="w-full min-h-full bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Hexagon + Heading Section */}
      <div className="w-full flex relative justify-center">
        <img
          src="/images/section3/hexagon.svg"
          alt="Hexagon decoration"
          className="w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] "
        />

        <div className="flex absolute inset-0 items-center justify-center flex-col text-center px-4">
          <h2 className="text-2xl font-primary sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            What People Say
          </h2>
          <p className="font-secondary text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto leading-relaxed px-2">
            Empower your team with scalable voice, messaging, and connectivity APIs — all from a single, developer-first platform
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-2 sm:px-4 mt-[-40px]">
        <Carousel testimonials={TestimonialsArray} autoPlay={true} autoPlayInterval={3000} />
      </div>
    </div>
  );
}

export default Testimonials;
