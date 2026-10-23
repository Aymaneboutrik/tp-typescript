import { Repository } from "./repository";
import { Wizard, NewWizard } from "./types";

const repo = new Repository<Wizard>();

const harry: NewWizard = { name: "Harry Potter", house: "Gryffindor" };
const saved = repo.add(harry);
console.log("Sorcier enregistré :", saved);

repo.add({ name: "Draco Malfoy", house: "Slytherin" });
console.log("Tous les sorciers :", repo.findAll());

// Ces lignes doivent être refusées par le compilateur (décommente pour tester) :
// repo.add({ id: 99, name: "Hermione", house: "Gryffindor" });
// repo.add({ name: "Ron", house: "Durmstrang" });