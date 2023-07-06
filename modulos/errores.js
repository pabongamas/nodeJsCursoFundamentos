function serompe(){
    return 3+z; 
}
function serompreasincrona(cb){
    setTimeout(function(){
        try {
            return 3+z;
        } catch (error) {
            console.error("Error en mi funcion asincrona");
            cb(error);
        }
    });
}

try {
    // serompe();
    serompreasincrona(function(err){
        console.log(err.message);
    });
} catch (error) {
    console.error("hubo un error");
    console.error(error.message);
    console.log("pero no pasa nada , ha sido capturado");
}

console.log("esto de aqui hasta al final");