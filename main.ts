import { WizardRepository } from "./wizard-repository";
import { NewWizard } from "./types";

const repo = new WizardRepository();

const harry: NewWizard = { name: "Harry Potter", house: "Gryffindor" };
const saved = repo.addWizard(harry);
console.log("Sorcier enregistré :", saved);

repo.addWizard({ name: "Draco Malfoy", house: "Slytherin" });
console.log("Tous les sorciers :", repo.findAll());

// Doivent être refusés par le compilateur (décommente pour tester) :
// repo.addWizard({ id: 99, name: "Hermione", house: "Gryffindor" });
// repo.addWizard({ name: "Ron", house: "Durmstrang" });