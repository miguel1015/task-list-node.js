const fs = require("fs")


const guardarDB = ( data ) => {

    const archivo = "./data.txt"



    fs.writeFileSync( archivo, JSON.stringify(data) )

}

module.exports = {
    guardarDB
}