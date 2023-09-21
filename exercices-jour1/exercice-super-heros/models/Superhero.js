import Villain from "./Villain.js";

// Définition de la classe Superhero
class Superhero extends Villain {
    constructor(name, real_name, height_cm, weight_kg, powers, team, main_enemies) {
        super(name, real_name, height_cm, weight_kg, powers, team)
        this.main_enemies = main_enemies;
    }
}export default Superhero;