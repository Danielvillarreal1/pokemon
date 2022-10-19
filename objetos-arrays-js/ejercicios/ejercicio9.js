// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

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


const addAbility = ()=>{
    const ej9  = {
        ...bulbasaur,
        ability: {...bulbasaur.ability, secondary:  "Discharge" },
        
        
    };
//bulbasaur.ability.push('  secondary:  "Discharge" ')
    return ej9

}


const abi = addAbility();
console.log(abi)



