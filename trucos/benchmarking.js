let suma=0;
console.time("todo");
console.time("Temporizador");
for(let i=0;i<10000000;i++){
    suma+=1;
}
console.timeEnd("Temporizador");
let suma2=0;

console.time("Bucle 2");



for(let j=0;j<10000000;j++){
    suma2+=2;
}
console.timeEnd("Bucle 2");

console.log("empieza el proceso async")
console.time("asincrono");
asincrona().then(()=>{
    console.timeEnd('asincrono');
})

console.timeEnd("todo");


function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log('Termina el proceso asincrono')
            resolve();
        })

    });
}