// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

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


const resistsType = ()=>{
    const  ej5 =squirtle.modifiers.resistances
    {
     for (var i = 0; i < squirtle.modifiers.resistances.length; i++) {
        resistenciasTipos= squirtle.modifiers.resistances
        tipo= squirtle.type
        
        if (tipo == resistenciasTipos[i]) {
            console.log(resistenciasTipos[i]  + "= " + "True");
        } else console.log(resistenciasTipos[i]  + "= "+  "False");
    }

    }
    return ej5
}
const resist = resistsType();
console.log(resist)
