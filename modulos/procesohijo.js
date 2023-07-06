const { exec,spawn } =require('child_process');

// exec('node consola.js',(err,stdout,sterr)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }

//     console.log(stdout);
// })
let proceso = spawn('cmd.exe', ['/c','dir']);/* esto para windows*/

console.log(proceso.pid);
console.log(proceso.connected);


proceso.stdout.on("data",function(dato){
    console.log(dato.toString());
})

proceso.on('exit',function(){
    console.log("el proceso termino");
    console.log(proceso.killed);
})