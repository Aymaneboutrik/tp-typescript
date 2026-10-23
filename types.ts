export type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff";

export interface Wizard {
  id: number;
  name: string;
  house: House;
}

// Exercice 1 : l'appelant ne fournit pas l'identifiant
export type NewWizard = Omit<Wizard, "id">;

export type AcademyEvent =
  | { type: "spell-cast"; wizardId: number; spellName: string }
  | { type: "level-up"; wizardId: number; newLevel: number }
  | { type: "wizard-expelled"; wizardId: number };

// Exercice 3 : on extrait uniquement l'événement "spell-cast" de l'union
export type SpellCastEvent = Extract<AcademyEvent, { type: "spell-cast" }>;