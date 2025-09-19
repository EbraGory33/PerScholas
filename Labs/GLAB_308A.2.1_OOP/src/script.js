// Part 1: Humble Beginnings
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
// adventurer.roll();

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  static MAX_HEALTH = 100;
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Scout"];
  constructor(name, role) {
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(
        `Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`
      );
    }
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class Companion extends Character {
  constructor(name, type, belongings = []) {
    super(name);
    this.type = type;
    this.inventory = belongings;
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// console.log(robin.health);

// === New Adventurers and their Companions ===

// Adventurer 1
const aragorn = new Adventurer("Aragorn", "Ranger");
aragorn.inventory.push("longsword", "torch", "healing herbs");

aragorn.companion = new Companion("Legolas", "Elf", ["bow", "quiver"]);
aragorn.companion.companion = new Companion("Gimli", "Dwarf", [
  "axe",
  "ale mug",
]);

// Adventurer 2
const lara = new Adventurer("Lara", "Explorer");
lara.inventory.push("grappling hook", "map", "pistol");

lara.companion = new Companion("Totec", "Warrior", ["spear", "shield"]);
lara.companion.companion = new Companion("Anaya", "Archaeologist", [
  "notebook",
  "lantern",
]);

// Adventurer 3
const merlin = new Adventurer("Merlin", "Wizard");
merlin.inventory.push("staff", "spellbook", "crystal orb");

merlin.companion = new Companion("Arthur", "Knight", ["armor", "excalibur"]);
merlin.companion.companion = new Companion("Owl", "Animal", [
  "feather",
  "wisdom scroll",
]);

// === Test some methods ===
aragorn.roll();
lara.scout();
merlin.companion.roll();

console.log(aragorn);
console.log(lara);
console.log(merlin);
