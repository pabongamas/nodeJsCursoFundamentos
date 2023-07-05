function hola(nombre,callback){
    setTimeout(function(){
        console.log("hola "+nombre)
        callback();
    },1000);
}
function adios(nombre,otrocallback){
    setTimeout(function(){
        console.log("adios ",nombre);
        otrocallback()
    },1000)
}

console.log("Iniciando proceso");
hola("carlos",function(){
    adios("carlos",function(){
    console.log("terminando proceso")
    });
});


