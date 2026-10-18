import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative sm:h-[42vw] min-h-[520px] overflow-hidden rounded-b-3xl sm:rounded-b-[60px] bg-[#5a2a12] md:rounded-b-[110px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={assets.hero_video}
        poster={assets.hero_image}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <h1 className="absolute bottom-[8%] left-8 right-8  text-[34px] uppercase leading-none tracking-wide text-white sm:text-5xl lg:left-[117px] lg:text-[52px]">
        Director, Animator &amp; Character Designer.
      </h1>
    </section>
  );
};

export default Hero;
