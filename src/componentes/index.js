import feijoada from "./feijoada.png";
import panqueca from "./panqueca.png";
import churrasco from "./churrasco.png";
import "./cardapio.css";

function Cardapio() {
  const pratos = [
    { nome: "Feijoada", preco: "R$ 25,00", imagem: feijoada },
    { nome: "Panqueca", preco: "R$ 15,00", imagem: panqueca },
    { nome: "Churrasco", preco: "R$ 30,00", imagem: churrasco }
  ];

  return (
    <div>
      <h1>Cardápio</h1>

      <h2>Pratos</h2>
      <ul>
        {pratos.slice(1, 3).map((prato, index) => (
          <li key={index}>
            {prato.nome} - {prato.preco}
            <br />
            <img src={prato.imagem} alt={prato.nome} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cardapio;