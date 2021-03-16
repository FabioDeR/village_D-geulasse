import Personnage from "./Personnage.js";

class Heroes extends Personnage {
  #inventaire = [];
  constructor(inventaire) {
    super(id, nom, img, att, def);
    this.#inventaire = inventaire;
  }
  get inventaire() {
    return this.#inventaire;
  }
  set inventaire(value) {
    this.#inventaire = value;
  }
}

export default Heroes;
