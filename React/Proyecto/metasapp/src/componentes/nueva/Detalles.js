import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../servicios/Memoria";
import estilos from "./Detalles.module.css";

function Detalles() {
  const [form, setForm] = useState({
    detalles: "",
    eventos: "10",
    periodo: "Día",
    icono: "🏃",
    meta: "365",
    plazo: "2022-05-10",
    completado: "5",
  });

  const [estado, enviar] = useContext(Contexto);

  const { detalles, periodo, eventos, icono, meta, plazo, completado } = form;

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };
  // useEffect(() => {
   // console.log(form);
  // }, [form]);

  const navegar = useNavigate();

  const crear = async () => {
    enviar({ tipo: "crear", meta: form });
    navegar("/lista");
  };

  const frecuencia = ["dia", "semana", "mes", "año"];
  const emoji = ["🏃", "🍳", "📓", "🖥️", "✈️", "🪙"];
  return (
    <div className="tarjeta">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input
            className="input"
            placeholder="ej. 52 caminatas"
            value={detalles}
            onChange={(e) => onChange(e, "detalles")}
          ></input>
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input
              className="input mr-6"
              type="number"
              value={eventos}
              onChange={(e) => onChange(e, "eventos")}
            />
            <select
              className="input"
              value={periodo}
              onChange={(e) => onChange(e, "periodo")}
            >
              {frecuencia.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantás veces deseas completar esta meta?
          <input
            className="input"
            type="number"
            value={meta}
            onChange={(e) => onChange(e, "meta")}
          />
        </label>
        <label className="label">
          ¿Tienes una fecha limite?
          <input
            className="input"
            type="date"
            value={plazo}
            onChange={(e) => onChange(e, "plazo")}
          />
        </label>
        <label className="label">
          ¿Cuantás veces haz completado ya esta meta?
          <input
            className="input"
            type="number"
            value={completado}
            onChange={(e) => onChange(e, "completado")}
          />
        </label>
        <label className="label">
          Escoge un icono para la meta
          <select
            className="input"
            value={icono}
            onChange={(e) => onChange(e, "icono")}
          >
            {emoji.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={estilos.botones}>
        <button className="boton boton--negro" onClick={crear}>
          Crear
        </button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
