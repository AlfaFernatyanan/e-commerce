import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="src\assets\Menu.png" />
      <h1 className="title">Alfa (Dev version) </h1>

      <div className="login">
        <div>
          Cart
          <img className="small-icon" src="src\assets\cart.svg" />
        </div>
        Login
      </div>
    </div>
  );
}

export default Header;
