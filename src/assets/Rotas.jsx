import { Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
