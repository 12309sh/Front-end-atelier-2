Vue d'ensemble :
Ce rapport présente une collection de classes JavaScript destinées à la modélisation
d'entités géométriques telles que des vecteurs, des rectangles, des carrés et des segments. 
Chaque classe est conçue pour représenter une entité spécifique avec ses propres attributs et méthodes
pour effectuer des opérations et afficher des informations.

    Fonctionnalités :
        
      Classe Vecteur2D :
        La classe Vecteur2D représente un vecteur bidimensionnel avec des attributs x et y.
        Elle offre des méthodes pour afficher le vecteur et effectuer une addition avec un autre vecteur.
    /*------------------------------------------------------------------------------------------------*/
    Classe Rectangle :
        La classe Rectangle représente un rectangle avec des attributs de longueur, de largeur et de nom.
        Elle propose des méthodes pour afficher le rectangle et calculer sa surface.
    /*------------------------------------------------------------------------------------------------*/
    Classe Carré :
        La classe Carre hérite de la classe Rectangle et représente un carré avec une longueur égale sur les côtés.
        Elle utilise le constructeur de sa classe parente et peut également afficher ses informations et calculer sa surface.
    /*------------------------------------------------------------------------------------------------*/
    Classe Point :
        La classe Point représente un point dans un espace bidimensionnel avec des coordonnées x et y.
    /*------------------------------------------------------------------------------------------------*/
    Classe Segment :
        La classe Segment représente un segment de droite défini par deux points (orig et extrem).

Conclusion :
Ces classes offrent une structure modulaire pour la modélisation d'entités géométriques en JavaScript.
Elles permettent de créer, manipuler et afficher différents types d'objets géométriques de manière efficace.
Les tests effectués démontrent le fonctionnement correct des classes et leur capacité à interagir les unes avec les autres de manière cohérente.
