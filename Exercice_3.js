class Vecteur2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  afficher() {
    console.log(`Vecteur : (${this.x}, ${this.y})`);
  }

  additionner(vecteur) {
    this.x += vecteur.x;
    this.y += vecteur.y;
  }
}

// TESTING :
let variable = new Vecteur2D();
let variable2 = new Vecteur2D(4, 2);
variable.additionner(variable2);
variable.afficher();

class Rectangle {
  constructor(longueur, largeur, nom) {
    this.longueur = longueur;
    this.largeur = largeur;
    this.nom = nom;
  }

  afficherRect() {
    console.log(`Rectangle : (${this.longueur}, ${this.largeur}, ${this.nom})`);
  }

  surface() {
    return this.longueur * this.largeur;
  }
}

class Carre extends Rectangle {
  constructor(x = 0, nom = "carré") {
    super(x, x, nom);
  }
}

class Point {
  constructor(x = 0.0, y = 0.0) {
    this.x = x;
    this.y = y;
  }
}

class Segment {
  constructor(x1, y1, x2, y2) {
    this.orig = new Point(x1, y1);
    this.extrem = new Point(x2, y2);
  }
}

// Testing Vecteur2D class
let vector1 = new Vecteur2D();
let vector2 = new Vecteur2D(4, 2);
vector1.additionner(vector2);
vector1.afficher();

// Testing Rectangle class
let rectangle = new Rectangle(5, 3, "myRectangle");
rectangle.afficherRect();
console.log("Surface:", rectangle.surface());

// Testing Carre class
let carre = new Carre(4, "mySquare");
carre.afficherRect();
console.log("Surface:", carre.surface());

// Testing Segment class
let segment = new Segment(1, 2, 4, 6);
console.log("Origine:", segment.orig);
console.log("Extrémité:", segment.extrem);
