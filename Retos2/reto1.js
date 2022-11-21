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

//-------------- Nota media asignatura 1 ----------------

// let sql = "SELECT AVG(mark) FROM stats WHERE subject_id = 1; ";
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

//-------------- COUNT OF STUDENT ----------------

// let sql = "SELECT COUNT(first_name) FROM students;";
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

//-------------- Listar todos los campos de clases (groups) ----------------

// let sql = "SELECT * FROM clases;";
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


//-------------- DELETE marks mayores a 5 de año 2002 ----------------

// let sql = "DELETE FROM stats WHERE mark > 5 && dates < \"2002-12-31\" && dates > \"2002-01-01\";";
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

//-------------- DATOS DE LOS ALUMNOS DE ESTE AÑO ----------------

// let sql = "SELECT * FROM students WHERE Año_de_ingreso <= \"2022-12-31\" && Año_de_ingreso >= \"2022-01-31\"";
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


//-------------- CANTIDAD DE PROFESORES POR ASIGNATURA ----------------

// let sql = "SELECT subject_id, COUNT(teacher_id) AS Cant_de_Profesores FROM subject_teacher GROUP BY subject_id;";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })