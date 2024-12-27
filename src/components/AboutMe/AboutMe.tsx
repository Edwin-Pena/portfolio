import "./AboutMe.css";
import Myphoto from "../../assets/images/edwin.png";

interface Props {
  description: string;
}

const AboutMe: React.FC<Props> = ({ description }) => {
  return (
    <section className="about">
      <div className="d-flex about-content">
        <div className=" text-box ">
          <h2 className="about-title">About me</h2>
          <p className="text">{description}</p>
        </div>
        <img src={Myphoto} alt="my-foto" className="myphoto" />
      </div>
    </section>
  );
};

export default AboutMe;
