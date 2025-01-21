import "bootstrap-icons/font/bootstrap-icons.css";
import "./IntroLogo.css";
import Brand from "/images/brand.png";
import ChevronDown from "./ChevronDown";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

const LogoIntro: React.FC<Props> = ({ name }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showMyName, setShowMyName] = useState(false);
  const [showChevron, setShowChevron] = useState(false);

  useEffect(() => {
    const timerLogo = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    const timerName = setTimeout(() => {
      setShowMyName(true);
    }, 1000);

    const timerChevron = setTimeout(() => {
      setShowChevron(true);
    }, 1700);

    return () => {
      clearTimeout(timerLogo);
      clearTimeout(timerName);
      clearTimeout(timerChevron);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowChevron(false);
      } else {
        setShowChevron(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section className=" logo-intro-container d-flex flex-column  justify-content-center align-items-center fullscreen position-relative">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src={Brand}
          className={`ed-logo fade-in ${showLogo ? "visible" : ""}`}
        />
        <p className={`name-intro fade-in ${showMyName ? "visible" : ""}`}>
          {name}
        </p>
      </div>
      <ChevronDown className={`fade-chevron ${showChevron ? "visible" : ""}`} />
    </section>
  );
};

export default LogoIntro;
