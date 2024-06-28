import "../styles/Header.css";
import Nav from "./Navigation";

function Header({ className }) {
  return (
    <header className={`header ${className} d-flex flex-column`} id="myHeader">
      <img
        src="logo-NO-lisc.png"
        alt="Attapluming Company logo"
        style={{ maxWidth: "25%", minWidth: "10rem" }}
      />
      <Nav />
    </header>
  );
}
export default Header;
