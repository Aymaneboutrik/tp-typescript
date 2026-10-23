export type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff";

export interface Wizard {
  id: number;
  name: string;
  house: House;
}

// Exercice 1 : l'appelant ne fournit pas l'identifiant
export type NewWizard = Omit<Wizard, "id">;

// Servira à l'exercice 3
export type AcademyEvent =
  | { type: "enrollment"; wizard: Wizard }
  | { type: "spell-cast"; wizardId: number; spell: string; power: number };