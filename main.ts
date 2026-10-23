import { WizardRepository } from "./wizard-repository";
import { SpellRepository } from "./spell-repository";
import { Cache } from "./decorators";
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

// Exercice 3
function handleSpellCast(event: SpellCastEvent): void {
  console.log(`Wizard ${event.wizardId} cast ${event.spellName}`);
}

handleSpellCast({
  type: "spell-cast",
  wizardId: 1,
  spellName: "Expelliarmus",
});

const levelUp: AcademyEvent = { type: "level-up", wizardId: 1, newLevel: 2 };
console.log("Autre événement de l'académie :", levelUp);

// Exercice 4
const spells = new SpellRepository();

spells.add({ id: 102, name: "Protego", category: "defense", power: 50 });
console.log("Sort valide ajouté");

try {
  spells.add({ id: 103, name: "Invalid Spell", category: "attack", power: -10 });
  console.log("Sort invalide ajouté (ne devrait pas arriver)");
} catch (error) {
  console.log("Sort refusé :", (error as Error).message);
}

console.log("Sorts enregistrés :", spells.findAll());

// Exercice 5
class SpellCalculator {
  @Cache
  calculatePower(basePower: number, multiplier: number): number {
    console.log("Calculating...");

    return basePower * multiplier;
  }
}

const calculator = new SpellCalculator();

console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(5, 2));