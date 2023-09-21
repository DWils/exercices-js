import Superhero from '../models/Superhero.js'
import Villain from '../models/Villain.js'

// Création d'instances de classe pour les méchants
const joker = new Villain("Joker", "Inconnu", 183, 73, ["#00B800", "#A40099"], ["Intelligence criminelle", "Humour dérangeant", "Maître du déguisement"]);
const doubleFace = new Villain("Double Face", "Harvey Dent", 182, 80, ["#0000FF", "#FFA500"], ["Personnalités multiples", "Utilisation d'une pièce de monnaie pour prendre des décisions"]);
const penguin = new Villain("Penguin", "Oswald Cobblepot", 150, 68, ["#000000", "#FFFFFF"], ["Stratégie criminelle", "Expert en armes à feu", "Utilisation de parapluies spéciaux"]);
const lexLuthor = new Villain("Lex Luthor", "Alexander Luthor Jr.", 188, 95, ["#000000", "#FFFFFF"], ["Intelligence surhumaine", "Ressources financières illimitées", "Scientifique génial"]);
const zod = new Villain("Zod", "General Zod", 190, 100, ["#000000", "#FF0000"], ["Super-force", "Vol", "Vision thermique"]);
const brainiac = new Villain("Brainiac", "Vril Dox", 175, 70, ["#00FFFF", "#000000"], ["Intelligence artificielle supérieure", "Collecteur de connaissances", "Contrôle mental"]);

// Création d'instances de classe pour les super-héros
const batman = new Superhero("Batman", "Bruce Wayne", 188, 95, ["#000000", "#FFFF00"], [joker, doubleFace, penguin], ["Intelligence", "Compétences en arts martiaux", "Technologie de pointe"], "images/batman.jpg");
const superman = new Superhero("Superman", "Clark Kent", 191, 101, ["#008000", "#000000"], [lexLuthor, zod, brainiac], ["Vol", "Super-force", "Vision thermique"], "images/superman.jpeg");
const wonderWoman = new Superhero("Wonder Woman", "Diana Prince", 183, 74, ["#FF0000", "#FFD700"], [], ["Force surhumaine", "Agilité", "Lasso magique"], "images/wonderwoman.jpg");


export const superheroes = [batman,superman,wonderWoman];
export const villains = [joker, doubleFace, penguin, lexLuthor, zod, brainiac]