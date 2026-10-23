import { WizardRepository } from "./wizard-repository";
import { NewWizard } from "./types";

const repo = new WizardRepository();

// Exercice 1
const harry: NewWizard = { name: "Harry Potter", house: "Gryffindor" };
const saved = repo.addWizard(harry);
console.log("Sorcier enregistré :", saved);

repo.addWizard({ name: "Draco Malfoy", house: "Slytherin" });
repo.addWizard({ name: "Hermione Granger", house: "Gryffindor" });
repo.addWizard({ name: "Luna Lovegood", house: "Ravenclaw" });
console.log("Tous les sorciers :", repo.findAll());

// Exercice 2
console.log("Gryffindor :", repo.findByHouse("Gryffindor"));
console.log("Slytherin :", repo.findByHouse("Slytherin"));
console.log("Hufflepuff :", repo.findByHouse("Hufflepuff")); // []

// Doivent être refusés par le compilateur (décommente pour tester) :
// repo.addWizard({ id: 99, name: "Ron", house: "Gryffindor" });
// repo.findByHouse("Durmstrang");