let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "DevTo11@0118",
        database: "codenotch"
    });

connection.connect(function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log("Conexion correcta");
    }
})


//-------------- AÑADIR COLUMNA ----------------

// let sql = "ALTER TABLE `codenotch`.`alumnos` ADD COLUMN `DNI` VARCHAR(45) NOT NULL AFTER`edad`; ";                  // crear columna de nombre DNI
// connection.query(sql, function(error, result)
//     {
//         if (error){
//             console.log(error);
//         }
//         else
//         {
//             console.log("Columna Creada")
//             console.log(result)
//         }
//     })

//-------------- ELIMINAR COLUMNA ----------------


// let sql = "ALTER TABLE `codenotch`.`alumnos` DROP COLUMN`DNI`;";                                                 //crear eliminar de nombre DNI
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Eliminada")
//         console.log(result)
//     }
// })

//-------------- ELIMINAR COLUMNA ----------------

// let sql = "DROP TABLE `codenotch`.`profesores`;";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })


