const getPokemon = require('../ejercicios/ejercicio0')
const squirtle = getPokemon('squirtle')
const pikachu = getPokemon('pikachu')

/*
Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
{
    attacker: "Squirtle",
    attacked: "Pikachu",
    move: "Water Gun",
    damage: 12,
    modifier: "weak" // otros valores: "resistant", "normal"
}
Y que devuelve un string con la siguiente plantilla:

`${attacker} used ${move}! ${attacked} lost ${damage} HP!`
Por ejemplo:

"Squirtle used Water Gun! Pikachu lost 12 HP!"
Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente,
se debe agregar It's not very effective!, por ejemplo:

"Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"

*/



function getAttackLog() {
    const battle = {
      attacker: squirtle.name,
      attacked: pikachu.name,
      move: squirtle.moves[2],
      damage: "12",
      modifier: "weak",
    };
    return battle;
  }
  let battle = getAttackLog(squirtle, pikachu);
  
  console.log(battle);
  
  console.log(
    `${battle.attacker} used ${battle.move}! ${battle.attacked} lost ${battle.damage} HP! It's not very effective!`
  );