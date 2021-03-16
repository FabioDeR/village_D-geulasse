import Heroes from "./Model/Personnage/Heroes.js";

fetch("http://localhost:8080/AllHeroes")
  .then((response) => response.json())
  .then((data) => loading(data.Heroes))
  .catch((err) => console.log(err));

const choicePerso = (data, tabId) => {
  const id = tabId[tabId.length - 1];
  const idHeroes = data[id - 1];
  const choix = new Heroes(
    idHeroes.id,
    idHeroes.nom,
    idHeroes.img,
    idHeroes.pointDevie,
    idHeroes.att,
    idHeroes.def,
    idHeroes.Inventaire
  );
  return choix;
};

const loading = (data) => {
  const tab = [];
  data.forEach((item) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.nom;
    img.setAttribute("id", item.id);
    img.setAttribute("class", "image-heroes");
    div.appendChild(img);
    document.querySelector(".containerHeroes").appendChild(div);
    img.addEventListener("click", () => {
      console.log(data);
      tab.push(img.id);
    });
  });
  document.querySelector(".btnValider").addEventListener("click", function () {
    this.disabled = "true";
    choicePerso(data, tab);
  });
};
