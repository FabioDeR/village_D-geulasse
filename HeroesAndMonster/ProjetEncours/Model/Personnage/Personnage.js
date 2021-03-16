class Personnage {
  #id;
  #nom;
  #img;
  #pointDevie;
  #att;
  #def;

  constructor(id, nom, img, pointDevie, att, def) {
    this.#id = id;
    this.#nom = nom;
    this.#att = att;
    this.#pointDevie = pointDevie;
    this.#img = img;
    this.#def = def;
  }

  get id() {
    return this.#id;
  }

  get nom() {
    return this.#nom;
  }
  get img() {
    return this.#img;
  }
  get att() {
    return this.#att;
  }
  get def() {
    return this.#def;
  }

  get pointDevie() {
    return this.#pointDevie;
  }
  set id(value) {
    this.#id = value;
  }
  set nom(value) {
    this.#nom = value;
  }
  set img(value) {
    this.#img = value;
  }
  set att(value) {
    this.#att = value;
  }
  set def(value) {
    this.#def = value;
  }
  set pointDevie(value) {
    this.#pointDevie = value;
  }
}

export default Personnage;
