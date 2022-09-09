import "./CatalogoComponente_styles.css";
import ProdutoComponente from "../ProdutoComponente/ProdutoComponente";
import { Dados } from "../../assets/Dados";

export default function CatalogoComponente() {
  return (
    <div className="catalogo-container">
      {Dados.map((roupa) => (
        <ProdutoComponente
          key={roupa.id}
          imagem={roupa.image}
          nome={roupa.nome}
          preco={roupa.precoOriginal}
          precoDesconto={roupa.precoDesconto}
          desconto={roupa.desconto}
        />
      ))}
    </div>
  );
}
