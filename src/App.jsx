import React, { useState } from "react";
import { Tableau } from "./components/myComposant/Tableau";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Formulaire } from "./components/myComposant/Formulaire";

function App() {
  const mesLivres = [
    {
      titre: "Une Si Longue Lettre",
      auteur: "Mariama Ba",
      identifiant: 1,
    },
    {
      titre: "Comtemplation",
      auteur: "Victor Hugo",
      identifiant: 2,
    },
    {
      titre: "Coup de pilon",
      auteur: "David Diop",
      identifiant: 3,
    },
  ];
  const [livres, setLivres] = useState(mesLivres);

  const ajouterLivre = (nouveauLivre) => {
    setLivres((prevLivres) => [...prevLivres, nouveauLivre]);
  };
  const supprimerLivre = (identifiant) => {
    setLivres(livres.filter((livre) => livre.identifiant !== identifiant));
  };

  return (
    <>
      <h1 className="my-5 flex justify-center text-4xl">
        Bibliotheque de livre
      </h1>
      <hr className="mx-auto w-10/12" />
      <div className="flex justify-between m-10">
        <h2 className="text-2xl">Mes Lectures</h2>
        <Formulaire ajouterLivre={ajouterLivre} />
      </div>
      <Tableau>
        {livres.map((livre) => (
          <TableRow key={livre.identifiant}>
            <TableCell className="font-medium">{livre.identifiant}</TableCell>
            <TableCell>{livre.titre}</TableCell>
            <TableCell>{livre.auteur}</TableCell>
            <TableCell className="grid gap-5 grid-cols-3">
              <Button className="text-white rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white">
                Modifier
              </Button>
              <Button className="text-white rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white">
                Lire
              </Button>
              <Button
                onClick={() => supprimerLivre(livre.identifiant)}
                className="bg-gradient-to-r from-red-300 via-red-600 to-red-900 hover:bg-gradient-to-br"
              >
                Supprimer
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </Tableau>
    </>
  );
}

export default App;
