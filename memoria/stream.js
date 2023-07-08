const fs=require('fs');
const stream=require('stream')
const util=require('util')

let data='';


//stream de lectura 
let readableStream=fs.createReadStream(__dirname+'/input.txt');


// readableStream.setEncoding('UTF8');
// readableStream.on('data',function(chunck){
//     data+=chunck;
// });

// readableStream.on('end',function(){
//     console.log(data);
// });

//stream de escritura

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');


const Transform=stream.Transform;

function Mayus(){
    Transform.call(this)
}

util.inherits(Mayus,Transform);

Mayus.prototype._transform=function(chunck,codificacion,callback){
    chunkMayus=chunck.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

let mayus=new Mayus();
readableStream.pipe(mayus).pipe(process.stdout)