
const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
      primary: "Overgrow",
      hidden: "Chlorophyll",
    },
    stats: {
      hp: 45,
      attack: 49,
      deffense: 59,
      speed: 45,
    },
    moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
    modifiers: {
      weakness: ["fire, ice", "flying", "psychic"],
      resistances: ["water", "grass", "electric", "fighter"],
    },
  };
  const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
      primary: "Blaze",
      hidden: "Solar Power",
    },
    stats: {
      hp: 39,
      attack: 52,
      deffense: 43,
      speed: 65,
    },
    moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
    modifiers: {
      weakness: ["water", "ground", "rock"],
      resistances: ["fire", "ice", "grass", "steal"],
    },
  };
  const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
      primary: "Torrent",
      hidden: "Rain Dish",
    },
    stats: {
      hp: 44,
      attack: 48,
      deffense: 50,
      speed: 43,
    },
    moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
    modifiers: {
      weakness: ["electric", "grass"],
      resistances: ["water", "fire", "ice", "steel"],
    },
  };
  const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
      primary: "Static",
      hidden: "Lightning rod",
    },
    stats: {
      hp: 35,
      attack: 55,
      deffense: 40,
      speed: 90,
    },
    moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
    modifiers: {
      weakness: ["ground"],
      resistances: ["electric", "flying", "water", "steel"],
    },
  };
  //Moves
  function getMoves() {
    const ej1 = {
      nombre: charmander.name,
      movimientos: charmander.moves,
    };
    return ej1;
  }
  let resultado = getMoves();
  console.log(resultado);
  //Primary Hability
  function getPrimaryAbility() {
    const ej2 = {
      nombre: bulbasaur.name,
      primeraHabilitad: bulbasaur.ability.primary,
    };
    return ej2;
  }
  let resultado2 = getPrimaryAbility();
  console.log(resultado2);
  //weakness
  function getWeaknesses() {
    const ej3 = {
      nombre: pikachu.name,
      debilidad: pikachu.modifiers.weakness,
    };
    return ej3;
  }
  let resultado3 = getWeaknesses();
  console.log(resultado3);
  //resistances
  function getResistances() {
    const ej4 = {
      nombre: squirtle.name,
      resistencia: squirtle.modifiers.resistances,
    };
    return ej4;
  }
  let resultado4 = getResistances();
  console.log(resultado4);
  //resiststype
  function resistsType() {
    const ej5 = {
      nombre: bulbasaur.name,
      resistenciasTipos: bulbasaur.modifiers.resistances,
      tiposEnemigo: pikachu.type,
    };
    return ej5;
  }
  let resultado5 = resistsType();
  console.log(resultado5);
  for (var i = 0; i < bulbasaur.modifiers.resistances.length; i++) {
    if (resultado5.tiposEnemigo == resultado5.resistenciasTipos[i]) {
      console.log(resultado5.resistenciasTipos[i] + " " + "True");
    } else console.log(resultado5.resistenciasTipos[i] + " " + "False");
  }








