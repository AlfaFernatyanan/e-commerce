import "./HeroSlider.css";

function HeroSlider() {
  return (
    <div className="slider">
      <img className="glasses" src="src\assets\Glasses.png" />
      <div className="arrow-left-right">
        <img src="src\assets\arrow left.svg" />
        <h5>Image 1</h5>
        <img src="src\assets\arrow right.svg" />
      </div>
    </div>
  );
}

export default HeroSlider;
