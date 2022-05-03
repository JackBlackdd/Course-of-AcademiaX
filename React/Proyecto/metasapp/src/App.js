import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/compartidos/Layout";
import Lista from "./componentes/lista/Lista.js";
import Detalles from "./componentes/nueva/Detalles.js";
import NoEncontrado from "./componentes/compartidos/noEncontrado";
import Modal from "./componentes/compartidos/Modal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Lista />} />
          <Route path="/lista" element={<Lista />}>
            <Route path="/lista:id" element={<Modal />} />
          </Route>
          <Route path="/Nueva" element={<Detalles />} />
        </Route>
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  );
}

export default App;
