import "./Hero.css";
import HeroDescription from "./HeroDescription";
import HeroSlider from "./HeroSlider";


function Hero() {
  return (
    <div className="hero">
      <HeroDescription />
      <HeroSlider />
    </div>
  );
}

export default Hero;
