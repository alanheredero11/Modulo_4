let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "DevTo11@0118",
        database: "codenotch"
    });

connection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Conexion correcta");
    }
})

// --------------- INSERT GROUPS -------------


// let sql = "INSERT INTO `codenotch`.`clases` (`name`) VALUES ('1ro'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('2do'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('3ro'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('4to'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('5to'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('6to'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('7to'); INSERT INTO`codenotch`.`clases`(`name`) VALUES('8to'); ";
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


// --------------- INSERT STUDENTS -------------

// let sql = "INSERT INTO `codenotch`.`students` (`first_name`, `last_name`, `clases_id`) VALUES ('Alberto', 'Morales', '2'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Maria', 'Gutierrez', '2'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Roberto', 'Gomez', '3'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Facundo', 'Tite', '1'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Pepe', 'Arnold', '1'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Felipe ', 'Anderson', '5'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Diego', 'Forlan', '4'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Lerenzo', 'Dinatale', '5'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Robbie', 'Keane', '8'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Alejandro', 'DelPiero', '7'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Ricardo ', 'Carvalho', '7'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Andre ', 'Silva', '6'); INSERT INTO`codenotch`.`students`(`first_name`, `last_name`, `clases_id`) VALUES('Roberto', 'Machini', '3'); ";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })


// --------------- INSERT SUBJECTS -------------

// let sql = "INSERT INTO `codenotch`.`subjects` (`title`) VALUES ('Definición'); INSERT INTO`codenotch`.`subjects`(`title`) VALUES('Dribbling'); INSERT INTO`codenotch`.`subjects`(`title`) VALUES('Cabezazo'); INSERT INTO`codenotch`.`subjects`(`title`) VALUES('Pase'); INSERT INTO`codenotch`.`subjects`(`title`) VALUES('Velocidad'); ";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

// --------------- INSERT SUBJECTS -------------

// let sql = "INSERT INTO `codenotch`.`teachers` (`first_name`, `last_name`) VALUES ('Gabriel', 'Batistuta'); INSERT INTO`codenotch`.`teachers`(`first_name`, `last_name`) VALUES('Diego', 'Maradona'); INSERT INTO`codenotch`.`teachers`(`first_name`, `last_name`) VALUES('Alan', 'Shearer'); INSERT INTO`codenotch`.`teachers`(`first_name`, `last_name`) VALUES('David', 'Beckam'); INSERT INTO`codenotch`.`teachers`(`first_name`, `last_name`) VALUES('Antonio ', 'Valencia'); ";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

// --------------- SETEAR STATS -------------

// let sql = "UPDATE stats SET mark = 0 WHERE stats_id BETWEEN 1 and 200;";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

// --------------- SELECT NOMBRE Y APELLIDO -------------

// let sql = "SELECT first_name, last_name FROM students";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

// --------------- SELECT PROFESORES -------------

// let sql = "SELECT *FORM teachers";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

// --------------- DELETE ANTERIOR A UN AÑO -------------

// let sql = "DELETE FROM stats WHERE dates > \"2012-11-18\";";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

// --------------- UPDATE STATS < 5 a 5 -------------

// let sql = "UPDATE stats SET mark = 5 WHERE mark < 5";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })