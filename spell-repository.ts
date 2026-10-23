import { Repository } from "./repository";
import { ValidateSpellPower } from "./decorators";
import { Spell } from "./types";

export class SpellRepository extends Repository<Spell> {
  @ValidateSpellPower
  override add(spell: Spell): Spell {
    return super.add(spell);
  }
}