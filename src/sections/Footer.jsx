import { socialImgs } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer w-full flex flex-col justify-center items-center py-4">
      {/* Email section with smaller rounded border */}
      <div className="flex items-center gap-1 px-3 py-1 bg-white text-black border border-gray-300 rounded-full shadow-sm mb-2">
        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
        <a
          href="mailto:agraharishlok25@gmail.com"
          className="text-xs md:text-sm hover:underline"
        >
          agraharishlok25@gmail.com
        </a>
      </div>

      {/* Social icons */}
      <div className="footer-container w-full flex justify-center items-center">
        <div className="socials flex justify-center items-center">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
