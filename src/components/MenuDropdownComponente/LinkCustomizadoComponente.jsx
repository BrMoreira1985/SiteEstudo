import "./MenuDropdownComponente_styles.css";
import { Link } from "react-router-dom";

export default function LinkCustomizadoComponente({ nome, rota }) {
  return (
    <Link to={rota}>
      <button className="link-customizado">{nome}</button>
    </Link>
  );
}
