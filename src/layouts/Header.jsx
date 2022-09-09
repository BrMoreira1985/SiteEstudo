import "./Layouts_styles.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import LogoComponente from "../components/LogoComponente/LogoComponente";
import BarraPesquisaComponente from "../components/BarraPesquisaComponente/BarraPesquisaComponente";
import MenuDropdownComponente from "../components/MenuDropdownComponente/MenuDropdownComponente";
import LinkCustomizadoComponente from "../components/MenuDropdownComponente/LinkCustomizadoComponente";
import Hamburger from "../components/HamburgerComponente/HamburgerComponente";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-area">
        <LogoComponente />

        <BarraPesquisaComponente />
        <div className="menu-usuario">
          <button className="area-de-clique">
            <div className="cadastro">
              <FaUser />
              <span>Meu cadastro</span>
            </div>
            <MenuDropdownComponente
              conteudo={
                <>
                  <LinkCustomizadoComponente nome="Entrar" rota={"/login"} />
                  <LinkCustomizadoComponente
                    nome="Cadastrar"
                    rota={"/cadastro"}
                  />
                </>
              }
            />
          </button>

          <div className="area-de-clique">
            <div className="carrinho">
              <FaShoppingCart />
              <span>Meu carrinho</span>
            </div>
            <MenuDropdownComponente />
          </div>
        <Hamburger/>
        </div>
      </div>
    </div>
  );
}
