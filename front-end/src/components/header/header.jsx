import logo from "../../assets/image/Logo.png";
import Logout from "../../assets/svg/Logout.svg";
import Return from "../../assets/svg/Return.svg";
import "./header.sass";

export function Header() {
  return (
    <header>
      <button>
        <img src={Return} alt="Return icon" />
      </button>

      <img src={logo} alt="Logo de votre marque" />
      <button>
        <img src={Logout} alt="Logout icon" />
      </button>
    </header>
  );
}
