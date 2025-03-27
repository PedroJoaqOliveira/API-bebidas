import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Login from "./pages/login";
import Vinho from "./pages/VInho";
import Vodka from "./pages/vodka/vodka";


export default function App() {
  return (
      <>
      <Routes>
        {// Corrigir path para -> /home }
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/vinho/:id" element={<Vinho/>}/>
        <Route path="/vodka/:id" element={<Vodka/>}/>
        <Route path="/*" element={<NotFound/>}/>

      </Routes>
      </>
  )
}
