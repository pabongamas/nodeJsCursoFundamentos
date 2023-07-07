process.on('uncaughtException', (err, origen) => {
    console.error('Se nos ha olvidado capturar un error')
    console.error(err)
})

process.on('exit', () => {
    console.log("El Proceso acabó")
    setTimeout(() => {
        console.log("Esto no debe de verse, ya que ocurriría después de que el programa se cerró")
    }, 2000)
    
})
let x = -1
process.on('beforeExit', () => {
    setTimeout(() => {
    if(x) {
    console.log("El Proceso va a terminar")
    console.log("Esta funcion asíncrona se va a repetir…")
    x++
    } else {
    console.log("Y repetir…")
    }
    }, 2000)
    }) 


funNoExiste()