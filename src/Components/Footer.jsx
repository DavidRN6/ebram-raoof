import {
  FaBehance,
  FaChevronUp,
  FaInstagram,
  FaLinkedinIn,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";

const SOCIALS = [
  { label: "Vimeo", href: "#", Icon: FaVimeoV },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Behance", href: "#", Icon: FaBehance },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
];

const EMAIL = "ebramraoof979@gmail.com";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black px-8 py-14 text-white md:py-16">
      <div className="mx-auto grid max-w-[1900px] items-center gap-10 md:grid-cols-3 md:gap-0">
        {/* الاسم + الحقوق */}
        <div className="text-center">
          <p className="text-4xl leading-none tracking-wide">EBRAM RAOOF</p>
          <p className="mt-1 font-['Montserrat'] text-[15px]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* السوشيال */}
        <ul className="flex items-center justify-center gap-5 text-[22px]">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label} className="hover:opacity-60">
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        {/* الإيميل + زرار الرجوع لفوق */}
        <div className="flex items-start justify-center gap-10">
          <a
            href={`mailto:${EMAIL}`}
            className="border-b border-white text-[26px] uppercase leading-none tracking-wide hover:opacity-60"
          >
            {EMAIL}
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-[75px] w-[52px] shrink-0 text-3xl items-start justify-center rounded-full border-[6px] border-[#fa2119] pt-1 text-[#fa2119] transition-transform hover:-translate-y-1 hover:-rotate-[10deg] motion-reduce:transition-none"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
