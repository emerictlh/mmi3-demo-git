import { useEffect, useState } from "react";
import type { Tache } from "./TacheType";


export default function Gestionnaire() {
  const [texte, setTexte] = useState<string>("");

  const [taches, setTaches] = useState<Tache[]>(() => {
    const sauvegarde = localStorage.getItem("taches");
    return sauvegarde ? JSON.parse(sauvegarde) : [];
  }); // aide de Claude qui m'a explique pourquoi opté pour cette façon au lieu d'un UseEffect

  /*
  useEffect(() => {
      const sauvegarde = localStorage.getItem("taches");
      if (sauvegarde) setTaches(JSON.parse(sauvegarde));
    }, []);
  */

  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
    console.log("Sauvegardé:", taches);
  }, [taches]);

  const ajouter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (texte.trim() === "") return;

    const nouvelleTache: Tache = {
      id: Date.now(),
      texte: texte,
      fait: false
    };

    setTaches([...taches, nouvelleTache]);
    setTexte("");
  }

  const fait = (id: number) => {
    setTaches(taches.map(t =>
      t.id === id ? { ...t, fait: !t.fait } : t
    )); // parcourt la map et prend les taches qui seront "fait"
  }

  const supprimer = (id: number) => {
    setTaches(taches.filter(t => t.id !== id)); // filtre le tableau en gardant seulement les taches avec un id different des taches supprimées
  }

  return (
    <form onSubmit={ajouter}>
      <input value={texte} onChange={e => setTexte(e.target.value)} />
      <button>Ajouter</button>

      <ul>
      {taches.map((tache) => (
        <li key={tache.id}>
          <span  style={{
              textDecoration: tache.fait ? 'line-through' : 'none', // Utilisation de Claude afin d'avoir un affichage stylisé
              cursor: 'pointer'
            }}>
            {tache.texte}
          </span>
            <button onClick={() => fait(tache.id)}>Fait</button>
          <button onClick={() => supprimer(tache.id)}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
    </form>
  )
}