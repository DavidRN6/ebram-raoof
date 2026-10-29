import { assets } from "../assets/assets";
import Squiggle from "../Components/Squiggle";

// شكل الصورة: superellipse (مربع بحواف دايرية ناعمة) بيتحسب مرة واحدة
const N = 3.2;
const SHAPE = `polygon(${Array.from({ length: 72 }, (_, i) => {
  const t = (i / 72) * Math.PI * 2;
  const c = Math.cos(t);
  const s = Math.sin(t);
  const x = 50 + 50 * Math.sign(c) * Math.abs(c) ** (2 / N);
  const y = 50 + 50 * Math.sign(s) * Math.abs(s) ** (2 / N);
  return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
}).join(",")})`;

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-8 py-16 font-montserrat md:py-24 lg:px-[78px]"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-5 md:gap-16">
        {/* الصورة */}
        <div className="flex justify-center md:col-span-2">
          <img
            src={assets.about}
            alt="Ahmed Adel"
            style={{ clipPath: SHAPE }}
            className="aspect-[480/460] w-full max-w-[320px] object-cover md:max-w-[480px]"
          />
        </div>

        {/* النص */}
        <div className="md:col-span-3">
          <h2 className="font-londrina text-5xl leading-none tracking-wide text-[#fa2119]">
            Hello, I&rsquo;m Ahmed !
          </h2>

          <Squiggle
            className="mt-5 w-[260px] sm:w-[343px]"
            width={343}
            height={20}
          />

          <div className="mt-10 space-y-4 text-[15px] leading-6 text-black sm:text-base">
            <p>
              I&rsquo;m an{" "}
              <strong>
                Animation Director, Supervisor, and Visual Storyteller
              </strong>{" "}
              with over 10 years of experience, based in Cairo, Egypt.
            </p>

            <p>
              I hold a Bachelor&rsquo;s Degree in &ldquo;Animation
              Directing&rdquo; from the <strong>High Cinema Institute</strong>.
              While my focus is on leading creative teams and directing
              campaigns, I am still a hands-on <strong>Animator</strong> and{" "}
              <strong>Character Designer</strong> at heart. I love telling
              stories through design, bringing short films to life, and sharing
              what I&rsquo;ve learned with the community.
            </p>

            <p>
              My professional work includes projects for{" "}
              <strong>Netflix</strong> (<em>Fever Dreams</em>),{" "}
              <strong>Cartoon Network &amp; HBO</strong> (
              <em>The Heroic Quest of the Valiant Prince Ivandoe</em>),{" "}
              <strong>Majid TV</strong> (<em>Zakia Al Zakia</em>), and{" "}
              <strong>MBC</strong> (<em>Hakawati Nation</em>).
            </p>
          </div>

          <div className="mt-10 flex md:justify-end md:pr-6">
            <a
              href="/resume.pdf"
              download
              className="bg-[#fa2119] px-5 py-[18px] text-[15px] uppercase leading-none text-white transition-opacity hover:opacity-85"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
