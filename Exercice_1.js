// Function voiture :
function voiture(model, marque, annee, type, carburant) {
  this.model = model;
  this.marque = marque;
  this.annee = annee;
  this.type = type;
  this.carburant = carburant;
}
// voiture getters : 
voiture.prototype.getModel = function () {
  return this.model;
};
voiture.prototype.getAnnee = function() {
    return this.annee;
}

let Vtr = new voiture("SUV", "Hyundai", 2020, "SUV", "Essence");

// Liste des voitures :
let voitures = [
  new voiture("SUV", "Hyundai", 2020, "SUV", "Essence"),
  new voiture("Sedan", "Ford", 2018, "Berline", "Diesel"),
  new voiture("Compact", "Hyundai", 2019, "Compacte", "Hybride"),
  new voiture("Truck", "Ford", 2021, "Camionnette", "Essence"),
];

// Function Hyundai :
function Hyundai(model, marque, annee, type, carburant, serie, hybrid) {
  voiture.call(this, model, marque, annee, type, carburant);
  this.serie = serie;
  this.hybrid = hybrid;
}

Hyundai.prototype = Object.create(voiture.prototype);
Hyundai.prototype.constructor = Hyundai;
Hyundai.prototype.alarmer = function () {
  console.log("Alarme activer pour la voiture hyundai");
};


// Function Ford :
function Ford(model, marque, annee, type, carburant, options) {
  voiture.call(this, model, marque, annee, type, carburant);
  this.options = options;
}
Ford.prototype = Object.create(voiture.prototype);
Ford.prototype.constructor = Ford;

voitures.sort((a, b) => a.getAnnee() - b.getAnnee());
console.log(voitures);