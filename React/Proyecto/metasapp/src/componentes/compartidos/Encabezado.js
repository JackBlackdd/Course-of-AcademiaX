import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { ReactComponent as NavSVG } from '../../img/nav.svg';
import Vinculo from './Vinculo';
import estilos from './Encabezado.module.css';

function Encabezamiento() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo} />
        <a className={estilos.titulo} href="/">
          Myshipgoal App
        </a>
      </div>
      <nav>
        <Vinculo to="/perfil" Icono={NavSVG}></Vinculo>
      </nav>
    </header>
  );
}

export default Encabezamiento;
