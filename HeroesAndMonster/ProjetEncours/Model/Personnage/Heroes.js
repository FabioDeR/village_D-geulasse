import Personnage from "./Personnage.js";

class Heroes extends Personnage {
  #inventaire = [];
  constructor(id, nom, img, pointDevie, att, def, inventaire) {
    super(id, nom, img, pointDevie, att, def);
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
