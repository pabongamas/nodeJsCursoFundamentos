console.log('algo');
console.info('Info');
console.error('error');

var tabla=[
    {
        a:1,
        b:'z'
    },
    {
        a:2,
        b:'otra'
    }
]

console.table(tabla);

// console.group("Conversacion");
// console.log("hola");
// console.log("hola aca va");
// console.log("este es un console. log group");
// console.groupEnd("Conversacion");

// function function1(){
//     console.group("funcion 1");
//     console.log("esto es de la funcion 1");
//     console.log("esto tambien");    
//     console.log("esto tambien");
//     function2();
//     console.log("he vueltoa la funcion 1");
//     console.groupEnd("funcion 1");

// }
// function function2(){
//     console.group("function 2");
//     console.log("ahora estamos en la funcion 2");
//     console.groupEnd("function 2");

// }

// console.log("empezaMOS");
// function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset("veces");
console.count("veces");


// Con console podemos imprimir todo tipo de valores por
// nuestra terminal.

// console.log: recibe cualquier tipo y lo muestra en el consola.
// console.info: es equivalente a log pero es usado para informar.
// console.error: es equivalente a log pero es usado para errores.
// console.warn: es equivalente a log pero es usado para warning.
// console.table: muestra una tabla a partir de un objeto.
// console.count: inicia un contador autoincremental.
// console.countReset: reinicia el contador a 0.
// console.time: inicia un cronometro en ms.
// console.timeEnd: Finaliza el cronometro.
// console.group: permite agrupar errores mediante identación.
// console.groupEnd: finaliza la agrupación.
// console.clear: Limpia la consola.