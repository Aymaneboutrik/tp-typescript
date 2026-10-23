import { Repository } from "./repository";
import { Wizard, NewWizard } from "./types";

export class WizardRepository extends Repository<Wizard> {
  addWizard(newWizard: NewWizard): Wizard {
    return this.add(newWizard);
  }
}