require("colors")
const { guardarDB } = require("./helpers/guardar");
const { inquirerMenu, stop, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


console.clear

const main = async() => {
    console.log("hola mundo ");

    let opt ="";    
    const tareas = new Tareas();


    do{
        opt = await inquirerMenu();    
        
        switch (opt) {
            case "1":
                //crear opcion
                const desc = await leerInput("Descripcion:")
                tareas.crearTarea(desc)
            break;

            case "2":
                console.log( tareas.listadoArr);
            // break;

            // case "3":
                
            // break;

            // case "1":
                
            // break;
        }

        guardarDB( tareas.listadoArr )



        await stop();

    }while(opt !== "0") 



   // stop();
}

main()