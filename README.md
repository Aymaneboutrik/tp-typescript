# TP TypeScript

TP de TypeScript portant sur les types utilitaires, les types gardes, les décorateurs de méthode et un référentiel générique, avec le thème d'une académie de sorciers.

**Auteur :** Aymane Boutrik

## Prérequis

- Node.js (version LTS)
- Git

## Installation

```bash
git clone https://github.com/Aymaneboutrik/tp-typescript.git
cd tp-typescript
npm install
```

## Exécution

```bash
npx tsx main.ts
```

Vérification des types sans exécuter le code :

```bash
npx tsc --noEmit
```

## Structure du projet

```
tp-typescript/
├── types.ts                # Types : House, Wizard, NewWizard, AcademyEvent, SpellCastEvent, Spell
├── repository.ts           # Référentiel générique Repository<T>
├── wizard-repository.ts    # WizardRepository : addWizard, findByHouse
├── spell-repository.ts     # SpellRepository : add avec @ValidateSpellPower
├── decorators.ts           # Décorateurs ValidateSpellPower et Cache
├── main.ts                 # Tests de tous les exercices
├── tsconfig.json
└── package.json
```

## Exercices réalisés

### Exercice 1 : Ajouter un sorcier
- Type `NewWizard = Omit<Wizard, "id">` : l'appelant ne fournit pas l'identifiant.
- Méthode `addWizard(newWizard: NewWizard)` : le référentiel attribue l'`id` automatiquement.

### Exercice 2 : Filtrer par maison
- Méthode `findByHouse(house: Wizard["house"])` : renvoie les sorciers d'une maison.
- `Wizard["house"]` est un type à accès indexé qui correspond à l'union `House`.

### Exercice 3 : Événement de lancement de sort
- Type `SpellCastEvent = Extract<AcademyEvent, { type: "spell-cast" }>`.
- La fonction `handleSpellCast` n'accepte que les événements de type `spell-cast`.

### Exercice 4 : Valider la puissance d'un sort
- Décorateur `@ValidateSpellPower` appliqué à `SpellRepository.add()`.
- Un sort dont la puissance est inférieure à zéro est rejeté avec une erreur.

### Exercice 5 : Méthode mise en cache
- Décorateur `@Cache` qui mémorise les résultats avec une `Map`.
- Un cache distinct est conservé pour chaque instance (via un `WeakMap`).
- Les appels répétés avec les mêmes arguments affichent `[CACHE HIT]`.

### Exercice 6 : Type guard strict
- `isHouse(value)` vérifie que la valeur est l'une des quatre maisons autorisées.
- `isWizard(value)` utilise `isHouse` : une maison comme `"Durmstrang"` est refusée.

## Maisons autorisées

`Gryffindor`, `Slytherin`, `Ravenclaw`, `Hufflepuff`

## Résultat attendu

L'exécution de `npx tsx main.ts` affiche notamment :

- l'ajout des sorciers avec leur `id` généré
- le filtrage par maison
- `Wizard 1 cast Expelliarmus`
- `Sort refusé : Spell power cannot be negative`
- `[CACHE MISS]` puis `[CACHE HIT]` pour la méthode mise en cache
- `true` puis `false` pour les tests de `isWizard`

## Technologies

- TypeScript
- Node.js
- tsx
