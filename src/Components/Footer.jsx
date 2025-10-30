import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between text-black items-center p-4">
      <p className="text-sm">© Ebram Raoof</p>
      <div className="flex gap-3 items-center">
        <a href="https://www.facebook.com/ebram.raoof" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ebramraooof/" target="_blank" className="text-lg">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ebram-raoof-41aa0014b/" target="_blank" className="text-lg">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
