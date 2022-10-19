// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}

 

function getWeaknesses() {
    const ej3 = {
        type: charmander.type
    }
    return ej3
}
const tipos = getWeaknesses()
console.log(tipos)