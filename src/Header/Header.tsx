import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="src\assets\Menu.png" />
      <h1 className="title">Alfa</h1>

      <div className="login">
        <div>
          Car
          <img className="small-icon" src="src\assets\cart.svg" />
        </div>
        Login
      </div>
    </div>
  );
}

export default Header;
