function asincrona(callback){
    setTimeout(function(){
        try {
            let a =3+z;
            callback(null,a);
        } catch (error) {
            callback(error,null);
        }
    },1000);
}

try {
    asincrona(function(error,dato){
        if(error){
            console.error("Tenemos un error");
            console.error(error);
            return false;
    
            // throw error no va a funcionar en asincrona
        }
    
        console.log("todo ha ido bien ,mi data es ",dato)
    }) 
} catch (error) {
    console.error("se capturo el error");
    console.error(error);
}

