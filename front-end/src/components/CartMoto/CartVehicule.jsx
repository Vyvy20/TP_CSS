import { useState } from "react";
import MotoPhoto from "../../assets/image/MotoPhoto.png";
import StatusGood from "../../assets/svg/StatusGood.svg";
import StatusNotGood from "../../assets/svg/StatusNotGood.svg";
import "./CartVehicule.sass";

export default function CartMoto() {
  const [use, setUse] = useState(false);
  const handleclick = () => setUse(!use);
  return (
    <li className="cartMoto">
      <img src={MotoPhoto} alt="Photo moto" />

      <p>Modèle A</p>

      {use ? (
        <button onClick={handleclick}>
          <img src={StatusNotGood} alt="Status Not Good icon" />
        </button>
      ) : (
        <button onClick={handleclick}>
          <img src={StatusGood} alt="Status Good icon" />
        </button>
      )}
    </li>
  );
}
