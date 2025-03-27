import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useNavigate, useParams } from "react-router-dom";
import "./bebida.css";
/* 
  Melhora o estilo dessa página.
*/

export default function Vinho() {
  const navigate = useNavigate();
  const [bebida, SetBebida] = useState([]);
 
  const params = useParams();
  const [maior, SetMaior] = useState(0);

  
  function calcular() {
    SetMaior(maior + bebida.preco);
  }

  function menos() {
    SetMaior(maior - bebida.preco);
  }

  

  useEffect(() => {
    async function fetchAPI() {
      const url = `https://67b7932c2bddacfb270f63a5.mockapi.io/api/v1/vinhos/${params.id}`;
      const req = await fetch(url);
      const resposta = await req.json();
      SetBebida(resposta);
      SetMaior(resposta.preco);

    }
    fetchAPI();
  }, []);
  return (
    <>
      <Header />

      <button className="b-voltar" onClick={() => navigate("/Home")}>
        Voltar
      </button>
      <div className="card-1" key={bebida.nome}>
        <div className="thumb-1">
          <img className="img-1" src={bebida.imagem} alt="" />
        </div>
        <div className="texto-1">
          <h4 className="nome-1">{bebida.nome}</h4>
          <p className="descricao-1">{bebida.descricao}</p>
          <h4 className="preco-1">{bebida.preco}</h4>
          <button className="botao-1">Comprar</button>
          <div>
            <h2>Quantidade</h2>
            <p>Valor Total: {maior}</p>
            <div className="b-soma">
              <button className="b-mais" onClick={calcular}>
                +
              </button>
              <button className="b-menos" onClick={menos}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
