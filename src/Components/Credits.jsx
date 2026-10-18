import { assets } from "../assets/assets";

// غيّر الأسماء دى لأسماء اللوجوهات عندك فى assets
const LOGOS = [
  { name: "Majid TV", src: assets.maged },
  { name: "MBC Academy", src: assets.spacetoon },
  { name: "HBO", src: assets.samaka },
  { name: "Cartoon Network", src: assets.jump },
  { name: "Netflix", src: assets.folk },
  { name: "Koogi", src: assets.koogi },
];

const Credits = () => {
  return (
    <section className="bg-white pt-5">
      <h2 className="text-center text-4xl tracking-wide text-[#fa2119] sm:text-[44px]">
        CREDITS IN
      </h2>

      <div className="my-4 overflow-hidden bg-[#fa2119] py-9 group">
        {/* القايمة متكررة مرتين عشان اللف يبقى متصل */}
        <ul className="flex w-max animate-[marquee_35s_linear_infinite] items-center motion-reduce:animate-none">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <li
              key={i}
              aria-hidden={i >= LOGOS.length}
              className="flex h-[100px] w-[210px] shrink-0 items-center justify-center px-6 sm:w-[390px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Credits;
