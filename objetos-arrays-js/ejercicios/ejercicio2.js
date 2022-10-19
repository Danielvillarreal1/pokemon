// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria

const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}

function getPrimaryAbility (){
    const ej2 = {
        primaryAbility: squirtle.ability.primary
    }
    return ej2;
}
let ability = getPrimaryAbility()
console.log(ability)
