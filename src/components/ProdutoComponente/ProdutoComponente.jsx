import "./ProdutoComponente_styles.css";
import { ConverterReal } from "../../assets/Funcoes";

export default function ProdutoComponente({
  imagem,
  nome,
  precoDesconto,
  preco,
  desconto,
}) {
  if (desconto) {
    let descontoAplicado = preco * (1 - desconto / 100);
    desconto = `-${desconto}%`;
    return (
      <div className="container-produto">
        <div className="selo-desconto">{desconto}</div>
        <div className="imagem-produto">
          <div className="zoom">
            <img src={imagem} alt={nome} />
          </div>
        </div>
        <h2 className="nome-produto">{nome}</h2>
        <div className="valores">
          <h3 className="preco original">{ConverterReal(preco)}</h3>
          <h3 className="preco">{ConverterReal(descontoAplicado)}</h3>
        </div>
        <button className="adicionar">Adicionar ao carrinho</button>
      </div>
    );
  } else
    return (
      <div className="container-produto">
        <div className="imagem-produto">
          <div className="zoom">
            <img src={imagem} alt={nome} />
          </div>
        </div>
        <h2 className="nome-produto">{nome}</h2>
        <div className="valores">
          <h3 className="preco original">{ConverterReal(preco)}</h3>
          <h3 className="preco">{ConverterReal(precoDesconto)}</h3>
        </div>
        <button className="adicionar">Adicionar ao carrinho</button>
      </div>
    );
}
