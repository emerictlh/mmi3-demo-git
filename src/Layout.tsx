import {Outlet, Link} from "react-router-dom";
import './Layout.css';

export default function Layout() {

  return (
    <div>
      <Outlet />
      <nav>
          <button><Link to="/accueil">Accueil</Link></button>
          <button><Link to="/taches">Tâches</Link></button>
          <button><Link to="/apropos">À propos</Link></button>
        </nav>
    </div>
  )
}