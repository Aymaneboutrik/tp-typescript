import { Repository } from "./repository";
import { Wizard, NewWizard } from "./types";

export class WizardRepository extends Repository<Wizard> {
  addWizard(newWizard: NewWizard): Wizard {
    return this.add(newWizard);
  }

  // Exercice 2 : Wizard["house"] est un type à accès indexé, équivalent à House
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.items.filter((wizard) => wizard.house === house);
  }
}