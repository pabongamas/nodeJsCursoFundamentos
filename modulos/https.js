const http=require('http');


// http.createServer(function(req,res){
//     console.log('Nueva peticion !');
//     console.log(req.url);

//     res.writeHead(201,{'Content-Type':'text/plain'})

//     //ESCRIBIR RESPUESTA AL USUARIO
//     res.write('Hola , ya se usar HTTP DE NODEJS');
//     res.end();
// }).listen(3000);

http.createServer(router).listen(3000);

function router(req,res){
    console.log('Nueva peticion !');
        console.log(req.url);
        
        switch(req.url){
            case '/hola':
                //esto es de lca clase de debugger 

                let saludo =hola();
                res.write(saludo);

                //
                res.write('Hola que tal');
                res.end();
                break;
            default:
                res.write("Error 404 no se lo que quieres");
                res.end();
        }

        // res.writeHead(201,{'Content-Type':'text/plain'})
    
        // //ESCRIBIR RESPUESTA AL USUARIO
        // res.write('Hola , ya se usar HTTP DE NODEJS');
        // res.end();
}

function hola(){
    return "Hola que tal por funcion";
}

console.log("Escuchando http en el puerto 3000");