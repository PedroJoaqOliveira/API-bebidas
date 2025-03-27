import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
        <li className="Header-total">
        <div className="esquerdo-h">
          <Link className="Shop-h" to='/'>
          <img className="Img-Logo" src="src/pages/img/logo.png" alt="" />
          </Link>
        </div>
        <div className="direito-h">
          <Link className="Shop-h" to='/'>
            Shop 
          </Link>

          <Link className="Contato-h" to='/'>
              Contato 
          </Link>

          <Link className="Quem-h" to='/'>
              Quem Somos 
          </Link>
          </div>
        </li>
    </header>
  );
}
