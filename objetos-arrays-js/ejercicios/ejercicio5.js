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
    ej5 = { 

      resistenciasTipos: squirtle.modifiers.resistances,
      tipo: squirtle.type,
    }
    return ej5
    if (resistenciasTipos===water){
        return True
    }else{
        return False
    }
}
const resist = resistsType();
console.log(resist)