// Fonction Etudiant :
function etudiant(nom, prenom, age, cne) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.cne = cne;
  etudiant.prototype.etudier = function () {
    console.log(this.getNom() + " " + this.getPrenom() + " en train d'étudier");
  };
}
// Fonction Prof :
function Professeur(nom, age, cin) {
  this.nom = nom;
  this.age = age;
  this.cin = cin;
  Professeur.prototype.enseigner = function () {
    console.log(this.getnomProf() + " en train d'enseigner");
  };
}

// Question 3 :
let etudiants = [
    new etudiant("Salih", "Hamza", 20, "KHMANKSD"),
    new etudiant("Faurass", "Nidal", 18, "dqdqsdqd"),
    new etudiant("Hichou", "Mohammed", 22, "gdgdfg"),
    new etudiant("Ronaldo", "Cristiano", 38, "KHlmwc"),
  ];
  etudiants.sort ((a,b) => {
    let comparison = a.nom.localeCompare(b.nom);
    if (comparison !== 0) {
       return comparison; 
    }else{
        return a.prenom.localeCompare(b.prenom);
    }
  })

  console.log(etudiants.sort());