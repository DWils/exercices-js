import Superhero from './models/Superhero.js'
import Villain from './models/Villain.js'
import prompt from 'prompt-sync';

// Une fonction pour obtenir la saisie de l'utilisateur
const getInput = prompt();

// Constantes pour les équipes
const justiceLeague = "Justice League";
const injusticeLeague = "Injustice League";

// Création d'instances de classe pour les super-héros
const batman = new Superhero("Batman", "Bruce Wayne", 188, 95, ["Intelligence", "Compétences en arts martiaux", "Technologie de pointe"], justiceLeague, []);
const superman = new Superhero("Superman", "Clark Kent", 191, 101, ["Vol", "Super-force", "Vision thermique"], justiceLeague, []);
const wonderWoman = new Superhero("Wonder Woman", "Diana Prince", 183, 74, ["Force surhumaine", "Agilité", "Lasso magique"], justiceLeague, []);

// Création d'instances de classe pour les méchants
const joker = new Villain("Joker", "Inconnu", 183, 73, ["Intelligence criminelle", "Humour dérangeant", "Maître du déguisement"], injusticeLeague);
const doubleFace = new Villain("Double Face", "Harvey Dent", 182, 80, ["Personnalités multiples", "Utilisation d'une pièce de monnaie pour prendre des décisions"], injusticeLeague);
const penguin = new Villain("Penguin", "Oswald Cobblepot", 150, 68, ["Stratégie criminelle", "Expert en armes à feu", "Utilisation de parapluies spéciaux"], injusticeLeague);
const lexLuthor = new Villain("Lex Luthor", "Alexander Luthor Jr.", 188, 95, ["Intelligence surhumaine", "Ressources financières illimitées", "Scientifique génial"], injusticeLeague);
const zod = new Villain("Zod", "General Zod", 190, 100, ["Super-force", "Vol", "Vision thermique"], injusticeLeague);
const brainiac = new Villain("Brainiac", "Vril Dox", 175, 70, ["Intelligence artificielle supérieure", "Collecteur de connaissances", "Contrôle mental"], injusticeLeague);


/* 1) Creez 2 nouveaux super héros (objet qui instancie la classe Superhero) : greenLantern et flash 
    Voici les infos json :

    {
        "superhero": "Flash",
        "real_name": "Barry Allen",
        "height_cm": 185,
        "weight_kg": 81,
        "main_enemies": [],
        "powers": ["Super-vitesse", "Réflexes accrus", "Création d'éclairs"],
        "team": "Justice League"
    }

    {
        "superhero": "Green Lantern",
        "real_name": "Hal Jordan",
        "height_cm": 189,
        "weight_kg": 90,
        "main_enemies": [],
        "powers": ["Anneau de pouvoir", "Création d'objets solides", "Vol spatial"],
        "team": "Justice League"
    }

    2)  Ajoutez joker, double face et penguin comme méchants de Batman et 
        luthor, zod et brainiac comme méchants de Superman

    3) créez un tableau qui regroupe les super héros

    4) même chose pour les villains

    5) Chaque super héros ou villain a grossie de 10 kg, créez une fonction permettent de modifier le poids de chaque personnage, 
    si cette information n'existe pas, ne pas modifier cette information
*/

// affichage d'un menu
console.log("Bienvenue sur le site DC Codex");

/*
    6) Créez le menu du site :
            Tapez 1 Pour afficher les super-héros
            (affichez toutes informations des super héros dans la console)
            Tapez 2 Pour afficher les méchants
            (affichez toutes informations des méchants dans la console)
            Tapez 3 Pour rechercher un héro par nom à mot clé
            (affichez dans la console, les noms des héros qui correspondent à la recherche)
            Tapez 4 Pour rechercher un méchant par nom à mot clé
            (affichez les noms des méchants qui correspondent à la recherche)
            Tapez 5 Pour Créer un super héro 
            (faites une fonction qui crée un super héros et l'ajouter à la liste des super héros, 
            affichez toutes les informations du nouveau super héros)
            Tapez 0 Pour Quitter
            (Le menu est terminé, vous pouvez envoyer "fin du programme")

    7) Mettre en marche le programme, utilisateur doit pouvoir choisir une action dans le menu ci-dessus, effectué l'action demandé  puis vous demandez s'il veux continuer, si oui renvoyez le menu sinon quitter le programme

    pour demander une saisie à votre utilisateur :
    const variableSaisieDeLUtilisateur = getInput("Votre question");
*/

