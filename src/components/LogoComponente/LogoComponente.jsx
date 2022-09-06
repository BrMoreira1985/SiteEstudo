import { Link } from "react-router-dom";
import "./LogoComponente_styles.css";

export default function LogoComponente() {
  return (
    <Link to={"/"} className="icone" title="Retornar para o início">
      <img src={require("./logo/Ocean_logo.png")} alt="logo Ocean" />{" "}
    </Link>
  );
}
