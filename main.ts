import { WizardRepository } from "./wizard-repository";
import type { NewWizard, SpellCastEvent, AcademyEvent } from "./types";

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
console.log("Hufflepuff :", repo.findByHouse("Hufflepuff"));

// Exercice 3 : ce gestionnaire n'accepte que les événements "spell-cast"
function handleSpellCast(event: SpellCastEvent): void {
  console.log(`Wizard ${event.wizardId} cast ${event.spellName}`);
}

handleSpellCast({
  type: "spell-cast",
  wizardId: 1,
  spellName: "Expelliarmus",
});

// Un événement de l'union complète reste valide pour AcademyEvent :
const levelUp: AcademyEvent = { type: "level-up", wizardId: 1, newLevel: 2 };
console.log("Autre événement de l'académie :", levelUp);

// Doivent être refusés par le compilateur (décommente pour tester) :
// handleSpellCast({ type: "level-up", wizardId: 1, newLevel: 2 });
// handleSpellCast({ type: "wizard-expelled", wizardId: 1 });