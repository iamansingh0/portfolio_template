// Import Assets
import profile from "../assets/profile.jpg";
import icon from "../assets/download.png";

const Header = () => {
  return (
    <section className="header">
      <div className="left">
        <h6 align="left" className="name">
          Hi, I am Aman Kumar
        </h6>
        <p align="left">
          Currently, a 3rd Year student pursuing a B.Tech degree in computer
          science at Vellore Institute of Technology, Chennai. Ever since I
          started studying blockchain and what exactly happens behind the
          scenes, I've been a fanatic for Blockchain field the "Web3". 
        </p>
        <button className="button">Contact Me</button>
        <div className="cv">
          <button><img src={icon} alt="download"/></button>
          <p><a href="https://drive.google.com/file/d/1_-957arxqSszJcJxlcHlPtYH6EUCqAHd/view?usp=sharing">Download CV</a></p>
        </div>
      </div>
      <div className="right">
        <div className="profile">
          <img src={profile} alt="Aman Kumar Singh" />
        </div>
        <div className="title">
          <p>Blockchain Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
