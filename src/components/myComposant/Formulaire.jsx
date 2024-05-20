import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Formulaire = ({ ajouterLivre }) => {
  const [formData, setFormData] = useState({
    titre: "",
    auteur: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { titre, auteur } = formData;
    if (!titre || !auteur) return;
    ajouterLivre({
      identifiant: Date.now(),
      titre,
      auteur,
    });
    setFormData({
      titre: "",
      auteur: "",
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Ajouter un livre
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Entrer les éléments du livre</DialogTitle>
          <DialogDescription>
            Veuillez entrer les informations du livre ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="titre" className="text-right">
                Titre
              </Label>
              <Input
                id="titre"
                className="col-span-3"
                value={formData.titre}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="auteur" className="text-right">
                Auteur
              </Label>
              <Input
                id="auteur"
                className="col-span-3"
                value={formData.auteur}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="text-white rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white"
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
