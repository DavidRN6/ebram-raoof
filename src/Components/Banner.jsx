import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center my-10 gap-10 px-4">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        {/* Text */}
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide leading-snug">
          WELCOME TO MY PORTFOLIO
        </h1>
        {/* Work Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-10 mt-6 max-w-[600px]">
          <img src={assets.folk} alt="folk" className="w-24 sm:w-28 md:w-32" />
          <img src={assets.jump} alt="jump" className="w-28 sm:w-32 md:w-36" />
          <img
            src={assets.spaceToon}
            alt="spaceToon"
            className="w-28 sm:w-32 md:w-36"
          />
          <img src={assets.samaka} alt="samaka" className="w-24 sm:w-28 md:w-32" />
          <img src={assets.koogi} alt="koogi" className="w-28 sm:w-32 md:w-36" />
          <img src={assets.maged} alt="maged" className="w-24 sm:w-28 md:w-32" />
        </div>
      </div>

      {/* Profile */}
      <div className="flex justify-center md:justify-end">
        <img src={assets.eboo} alt="profile"  className="w-56 sm:w-72 md:w-[400px]" />
      </div>
    </section>
  );
};

export default Banner;
