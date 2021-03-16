/**
 * NPM A FAIRE
 * NPM INSTALL C'EST TOUT
 */

/**require() permet de charger les modules */
let app = require("express")();
/** fs permet d'interagir avec le systeme fichier*/
const fs = require("fs/promises");
/**Body-parser est un middelware */
const bodyParser = require("body-parser");
/**require pour acceder au module path */
const path = require("path");
/** cors les cors sont un systeme de protection d'api qui me permet de connecter mon back end a mon front */
const cors = require("cors");
/**chalk permet de stylisé les réponse de la console */
const chalk = require("chalk");
const log = console.log;
/**Morgan est un middelWare qui permet d'affciher en console les type de de request et les message d'erreur */
const morgan = require("morgan");

/**je définis un chemin a parcourir */
const dbpathHeroes = path.join(__dirname, "db", "Heroes.json");
const dbpathMonsters = path.join(__dirname, "db", "Monster.json");
//Middelware => S'éxécute avant la methode de la route IMPORTANT !!!!!!!!!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

/** function qui permet de recevoir un objet, il utilise une promesse et la promise fait travail juste au moment qu'il reçoit bien un objet  */
function readJsonFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path)
      .then((rawdata) => resolve(JSON.parse(rawdata.toString())))
      .catch((err) => reject(err));
  });
}

function writeJsonFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data))
      .then((_) => resolve())
      .catch((err) => reject(err));
  });
}

/**Controller ------ Heroes*/
/**GET */
app.get("/AllHeroes", (req, response) => {
  readJsonFile(dbpathHeroes)
    .then((objet) => response.json(objet))
    .catch((err) => response.status(500).jsonp({ err: err.message }));
});

/**POST */
app.post("/pushHeroes", (req, res) => {
  const object = req.body;
  readJsonFile(dbpathHeroes)
    .then((data) => {
      console.log("je suis ici", data);
      data.Heroes.push(object);
      writeJsonFile(dbpathHeroes, data)
        .then((_) => log(chalk.blue("c'est ok")))
        .catch(() => log(chalk.red("c'est ok")));
      res.jsonp(object);
    })
    .catch((err) => res.status(500).jsonp({ error: err.message }));
});
/**Controller ------ Monsters*/
app.get("/AllMonsters", (req, response) => {
  readJsonFile(dbpathMonsters)
    .then((objet) => response.json(objet))
    .catch((err) => response.status(500).jsonp({ err: err.message }));
});

/**POST */
app.post("/pushMonsters", (req, res) => {
  const object = req.body;
  readJsonFile(dbpathMonsters)
    .then((data) => {
      console.log("je suis ici", data);
      data.Heroes.push(object);
      writeJsonFile(dbpathMonsters, data)
        .then((_) => log(chalk.blue("c'est ok")))
        .catch(() => log(chalk.red("c'est ok")));
      res.jsonp(object);
    })
    .catch((err) => res.status(500).jsonp({ error: err.message }));
});
app.listen(8080, () => console.log("App start at http://localhost:8080"));
