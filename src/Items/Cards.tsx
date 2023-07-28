import "./Cards.css";
import Card from "./Card";
import ProductModel from "../models/ProductModel";

function Cards() {
  const prefixAsset = "src/assets/image ";

  let dummyData: ProductModel[] = [
    {
      id: 1,
      title: "Black Leather Belt",
      image: prefixAsset + "3.png",
      price: 37770,
    },
    {
      id: 2,
      title: "Black Perfume",
      image: prefixAsset + "4.png",
      price: 37770,
    },
    {
      id: 3,
      title: "Black Leather Gloves",
      image: prefixAsset + "5.png",
      price: 37770,
    },
    {
      id: 4,
      title: "Black Jacket",
      image: prefixAsset + "6.png",
      price: 37770,
    },
    {
      id: 5,
      title: "Black Pants",
      image: prefixAsset + "7.png",
      price: 37770,
    },
    {
      id: 6,
      title: "",
      image: prefixAsset + "8.png",
      price: 37770,
    },
    {
      id: 7,
      title: "Black Shoes",
      image: prefixAsset + "9.png",
      price: 37770,
    },
    {
      id: 8,
      title: "Black Sunglasses",
      image: prefixAsset + "10.png",
      price: 37770,
    },
    {
      id: 9,
      title: "Black HAT",
      image: prefixAsset + "11.png",
      price: 37770,
    },
  ];
  return (
    <div className="cards">
      {dummyData.map((val) => (
        <Card
          key={val.id}
          image={val.image}
          title={val.title}
          price={val.price}
        />
      ))}
    </div>
  );
}

export default Cards;
