import StandardButton from "../components/StandardButton";
import "./Card.css";

function Card(props: any) {
  return (
    <div key={props.key} className="card">
      <div className="cart-button">
        <a href="#" />
      </div>
      <div className="image">
        <img src={props.image} />
      </div>

      <h3>{props.title}</h3>
      <h5>Rp. {props.price}</h5>
      <StandardButton label="Buy" link="#" />
    </div>
  );
}

export default Card;
