const inquirer = require("inquirer")
require("colors")

const preguntas = [
    {
        type: "list",
        name:"opcion",
        message: "¿que desea hacer?",
        choices: [
            {
                value: "1",
                name: `${ "1.".yellow } Crear lista`
            },
            {
                value: "2",
                name: `${ "2.".yellow } Lista de tareas`
            },
            {
                value: "3",
                name: `${ "3.".yellow } Lista de tareas completadas`
            },
            {
                value: "4",
                name: `${ "4.".yellow } Lista de tareas pendientes`
            },
            {
                value: "5",
                name: ` ${ "5.".yellow } completar tareas`
            },
            {
                value: "6",
                name: `${ "6.".yellow } Borrar tarea`
            },
            {
                value: "0",
                name: `${ "0".yellow }. Salir`
            }
        ]
    }
]




const inquirerMenu = async() =>{
    
    console.clear()
      console.log("=====================".yellow);
      console.log("seleccione una opcion");
      console.log("=====================".yellow);

    const { opcion } = await inquirer.prompt(preguntas)
    return opcion; 
}

const stop = async ( ) => {
    
    const question= [
        {
            type: "input",
            name: "enter",
            message: `\nPresione ${"ENTER".yellow} para continuar\n`
        }
    ]

    await inquirer.prompt(question)

}

const leerInput = async( message ) => {

    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate( value ){
                if ( value.length === 0){
                    return "por favor ingrese un valor";
                }return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc;
}


module.exports = {
    inquirerMenu,
    stop,
    leerInput
}