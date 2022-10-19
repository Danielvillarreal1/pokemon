// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}



const getResistances = () => {
    return {
        weakTypes: bulbasaur.modifiers.resistances
        }
    }

const tipo  = getResistances()
console.log(tipo)

