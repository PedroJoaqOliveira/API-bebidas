import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [vinhos, SetVinhos] = useState([]);
  const [vodkas, SetVodkas] = useState([]);
  const [incial, SetInicial] = useState([]);
  const [nomeUrl, setUrl] = useState('vinho')


  /* Criar um novo state: vai receber um valor de um input 
    pode ser chamado de busca, setBusca.
  */

  useEffect(() => {
    async function fetchAPI() {
      const url = "https://67b7932c2bddacfb270f63a5.mockapi.io/api/v1/vinhos";
      const req = await fetch(url);
      const resposta = await req.json();
      SetVinhos(resposta);
      SetInicial(resposta);

      const url2 = " https://67b7932c2bddacfb270f63a5.mockapi.io/api/v1/Vodkas";
      const req2 = await fetch(url2);
      const resposta2 = await req2.json();
      SetVodkas(resposta2);
    }
    fetchAPI();
  }, []);


  function handleSelecionar(bebida) {
    if (bebida === 'vodka') {
      SetInicial(vodkas)
      setUrl('vodka')
    } else {
      SetInicial(vinhos)
    }
      
    

  }
  return (
    <div>
      <Header />
      {/* Você deve criar um input, com um onChange*/}
      {/* Você deve criar um botão, com um onClick*/}
      <img className="Bunner" src="src/pages/img/LoganDrinks BR.png" alt="" />
      <p className="bunner-quebra">Bebidas</p>
      <div className="Slogan-total">
      <div className="slogan-1-home">
        <div className="text-slogan">
        <h2 className="text-h2">NOVIDADES TODAS AS SEMANAS!</h2>
        <p className="text-p">A Distribuidora Online está cheia de novidades para você! Agora, contamos com um catálogo ainda maior,
         oferecendo mais variedade de produtos com preços imbatíveis. Além disso, nossa plataforma está mais rápida e intuitiva, facilitando sua experiência de compra.</p>
        </div>
      </div>
      </div>
      <div className="">
        <div className="">
          <ul className="flex-center">
            <li className="li-item" onClick={() => handleSelecionar('vodka')}>
            <img src="src/pages/img/VodkaAbsolut.png" alt=""/>
            </li>
            <li className="li-item" onClick={() => handleSelecionar('vinho')}>
              <img src="src/pages/img/VInhoMalbac.png" alt=""/>
            </li>
          </ul>
        </div>
        <div className="grid">
          {incial.map((element) => (
            <div className="card" key={element.nome}>
              <div className="thumb">
                <img src={element.imagem} alt="" />
              </div>
              <div className="texto-card">
                <h4 className="nome-card">{element.nome}</h4>
                <p className="discricao-card">{element.descricao}</p>
                <h4 className="preco-card">{element.preco}</h4>
                <button onClick={() => navigate(`/${nomeUrl}/${element.id}`)}>
                  {" "}
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
