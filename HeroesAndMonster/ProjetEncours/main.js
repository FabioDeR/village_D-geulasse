import Heroes from "./Model/Personnage/Personnage.js";
import Personnage from "./Model/Personnage/Personnage.js";

// fetch("http://localhost:8080/fichier")
//   .then(
//     (response) => response.json()
//     //   loading(data);
//   )
//   .then((data) => loading(data.information))
//   .catch((err) => console.log(err));

// let perso = [];
// function loading(data) {
//   const perso1 = new Personnage(
//     data.id,
//     data.nom,
//     data.img,
//     data.att,
//     data.def
//   );
//   console.log(perso1);

//   data.forEach((element, index) => {
//     perso[index] = new Personnage(
//       element.id,
//       element.nom,
//       element.img,
//       element.img,
//       element.att,
//       element.def
//     );
//   });
//   console.log(perso[0]);
// }

// import Personnage from "./Personnage";

let demo = new Heroes();
console.log("je suis ici", demo);
