import "./HeroDescription.css";

function HeroDescription() {
  return (
    <div className="description">
      <h1 className="description-text">Description</h1>

      <div className="wrapper">
        <div>
          <p className="describe">
            Imagine some absolutely stunning sunglasses, designed for those who
            seek the perfect combination of style and functionality.
          </p>
         
          <div className="bigprice">
            <p> Regular price: $4,420.00 USD</p>

            <p>Offer price: $3,770.00 USD</p>
          </div>
        </div>
        <h4 className="buy">Buy</h4>
      </div>
      <div className="arrow-down">
        <h5>Detail of product</h5>
        <img src="src\assets\arrow down.svg" />
      </div>
    </div>
  );
}

export default HeroDescription;
