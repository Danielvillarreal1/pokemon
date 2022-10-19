// getMoves() Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}

function getMoves() {
    const ej1 = {
        movimientos: pikachu.moves};
    return ej1;
  }
  let moves = getMoves();
  console.log(moves);
