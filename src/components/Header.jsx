import "../styles/Header.css";
import Nav from "./Navigation";
import { IKImage, IKContext } from "imagekitio-react";

function Header({ className }) {
  return (
    <header className={`header ${className} flex-column`} id="myHeader">
      <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
        <IKImage
          src="https://ik.imagekit.io/pbq9icsqc/logo-NO-lisc.webp?updatedAt=1720653473902"
          alt="Attapluming Company logo"
          className="ms-3"
          loading="lazy"
          width="300"
          height="100"
        />
      </IKContext>
      <Nav />
    </header>
  );
}
export default Header;
