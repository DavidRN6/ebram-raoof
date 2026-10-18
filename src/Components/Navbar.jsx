import { useEffect, useState } from "react";
import {
  FaBehance,
  FaChevronDown,
  FaChevronRight,
  FaInstagram,
  FaLinkedinIn,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const SOCIALS = [
  { label: "Vimeo", href: "#", Icon: FaVimeoV },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Behance", href: "#", Icon: FaBehance },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
];

const PROJECTS = ["Animation", "Character Design", "Direction"];

const Logo = () => (
  <a href="/" className="shrink-0">
    <img
      src={assets.logo}
      alt="Ahmed Adel"
      className="h-6 w-auto object-contain lg:h-7"
    />
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false); // desktop dropdown
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [mobileProjects, setMobileProjects] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const item = (i) => ({
    className: `transition-all duration-500 ease-out motion-reduce:transition-none ${
      menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
    style: { transitionDelay: menuOpen ? `${350 + i * 90}ms` : "0ms" },
  });

  return (
    <header className="relative z-20 flex h-[90px] items-center justify-between bg-white px-8 lg:px-[78px]">
      <div className="flex items-center gap-8 lg:gap-12">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 font-['Montserrat'] text-[15px] md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1 py-8"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              PORTFOLIO
              <FaChevronDown
                size={15}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <ul className="absolute left-0 top-[78px] min-w-[200px] bg-white py-2 shadow-lg">
                {PROJECTS.map((p) => (
                  <li key={p}>
                    <a
                      href="#"
                      className="block px-5 py-2 hover:bg-neutral-100"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href="#about" className="hover:opacity-60">
            About
          </a>
          <a href="#contact" className="hover:opacity-60">
            Contact
          </a>
        </nav>
      </div>

      {/* Desktop socials */}
      <ul className="hidden items-center gap-3 md:gap-5 text-[18px] text-black md:flex">
        {SOCIALS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} aria-label={label} className="hover:opacity-60">
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <button
        className="flex w-9 flex-col items-end gap-[9px] py-2 md:hidden"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <span
          className={`h-[2px] w-9 bg-black transition-all duration-300 motion-reduce:transition-none ${
            menuOpen ? "translate-y-[10px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 bg-black transition-all duration-300 motion-reduce:transition-none ${
            menuOpen ? "w-0 opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-9 bg-black transition-all duration-300 motion-reduce:transition-none ${
            menuOpen ? "-translate-y-[10px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile fullscreen */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black text-white transition-[clip-path,visibility] duration-700 ease-in-out motion-reduce:transition-none md:hidden ${
          menuOpen ? "visible" : "invisible"
        }`}
        style={{
          clipPath: menuOpen
            ? "circle(150% at calc(100% - 50px) 47px)"
            : "circle(0px at calc(100% - 50px) 47px)",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[94px] shrink-0 items-center justify-between px-8">
          <Logo />

          {/* X: الخطين بيترسموا واحد ورا التانى */}
          <button
            className="relative h-9 w-9"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "scale-x-100 delay-500" : "scale-x-0"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "scale-x-100 delay-[600ms]" : "scale-x-0"
              }`}
            />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center overflow-y-auto px-8 font-['Montserrat'] text-[40px] leading-[1.35]">
          <div {...item(0)}>
            <button
              className="flex items-center gap-4 text-left"
              aria-expanded={mobileProjects}
              onClick={() => setMobileProjects((v) => !v)}
            >
              PORTFOLIO
              <FaChevronRight
                size={18}
                className={`transition-transform duration-300 ${
                  mobileProjects ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* فتح/قفل القايمة الفرعية بحركة ناعمة */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                mobileProjects ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <ul className="flex min-h-0 flex-col gap-1 overflow-hidden pl-1 text-[22px] text-white/70">
                {PROJECTS.map((p) => (
                  <li key={p}>
                    <a href="#" onClick={closeMenu} className="block py-1">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#about"
            onClick={closeMenu}
            {...item(1)}
            className={`self-start ${item(1).className}`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            {...item(2)}
            className={`self-start ${item(2).className}`}
          >
            Contact
          </a>
        </nav>

        <ul className="flex shrink-0 items-center gap-5 px-8 pb-12 pt-6 text-[22px]">
          {SOCIALS.map(({ label, href, Icon }, i) => (
            <li key={label} {...item(3 + i)}>
              <a href={href} aria-label={label} className="hover:opacity-60">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
