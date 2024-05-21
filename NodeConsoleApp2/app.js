const arr = [1, 2, 3, 4];
const str = 'abcdefghijklmnopqrstucxyz';
const person = {
    nombre: 'Jeff',
    dia: 10,
    mes: 12,
    anio: 1999,

    //Aquí se modifica el arreglo 
    /*
    [Symbol.iterator]: function* (){
        const props = Object.keys(this);
       
        for (let i = 0; i < props.length; i++) {
            yield this[props[i]];
        }
    }*/
}

//Imprime de lo más normal los arreglos
//console.log(arr);
//console.log(str);
//console.log(person)


    //for of representación del método iterador
    //Se itera con for of str
    /*
    for (const item of str) {
        console.log(item)
    }*/

    /*
    //Se itera con for of arr
    // Contenido de arr
    for (const item of arr) {
        console.log(item)
    }*/

    /*
    //Se itera con for in arr para ver la forma en que funciona el nombre de las variables.
    // # de objetos contenidos en arr
    for (const item in arr) {
        console.log(item)
    }*/


    //for of no funciona en objetos, "no se puede iterar una persona"
        /*
    for (const item of person) {
    console.log(item)}*/

    //for in funciona, pero con las etiquetas o variables
    /*
    for (const item in person) {
        console.log(item)
    }*/






/*
//Creamos un generador con el * y el yield y luego modificamos el arreglo
function* generator() {
    yield 1
}*/

//Ahora sí funca el for of para personas.
/*
for (const item of person) {
    console.log(item);
}
*/