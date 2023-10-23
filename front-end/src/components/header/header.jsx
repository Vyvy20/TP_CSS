import logo from "../../assets/image/Logo.png";
import Logout from "../../assets/svg/Logout.svg";
import Return from "../../assets/svg/Return.svg";
import "./header.sass";

export function Header() {
  return (
    <header>
      <a>
        <img src={Return} alt="Return icon" />
      </a>

      <img src={logo} alt="Logo de votre marque" />
      <a>
        <img src={Logout} alt="Logout icon" />
      </a>
    </header>
  );
}
