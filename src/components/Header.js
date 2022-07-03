// Import Assets
import profile from "../assets/profile.jpg";

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
          scenes, I've been a fanatic for Blockchain field the "Web3". I am
          looking for an opportunity to contribute that can change and have an
          impact on the future.
        </p>
        <button className="button">Contact Me</button>
        <div className="cv">
          <button>Download CV</button>
          
        </div>
        <button>Download CV</button>
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
