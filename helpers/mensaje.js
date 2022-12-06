require("colors")

const mostrarMenu = () =>{

    return new promise( resolve => {

      console.clear()
      console.log("=====================".yellow);
      console.log("seleccione una opcion");
      console.log("=====================".yellow);

      console.log(`${"1.".yellow} Crear tarea`);
      console.log(`${"2.".yellow} Lista de tareas`);
      console.log(`${"3.".yellow} Lista de tareas completadas`);
      console.log(`${"4.".yellow} Lista de tareas pendientes`);
      console.log(`${"5.".yellow} completar tareas`);
      console.log(`${"6.".yellow} Borrar tarea`);
      console.log(`${"0.".yellow} Salir \n`);

      const readline = require('readline').createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        readline.question(`seleccione una opcion`, (opt) => {
          // console.log( opt );
          readline.close();
          resolve(opt)
        });
      } ) 


}

const stop = () => {
  
  return new promise( resolve => {
  
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".yellow} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });

  })
  
        
}


module.exports = {
    mostrarMenu,
    stop
}