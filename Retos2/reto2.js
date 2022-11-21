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

// let sql = "SELECT student_id, mark FROM stats WHERE student_id BETWEEN 1 AND 20 || mark > 8 && dates BETWEEN \"2002-01-01\" AND \"2004-12-31\"";
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


//-------------- Nota media asignatura 1 ----------------

// let sql = "SELECT AVG(mark) FROM stats WHERE dates BETWEEN \"2004-01-01\" AND \"2006-12-31\";";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

//-------------- Nota media asignatura 1 ----------------

// let sql = "SELECT student_id, SUM(mark)/COUNT(mark) AS MEDIA_ARITMETICA FROM stats GROUP BY student_id;";
// connection.query(sql, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })