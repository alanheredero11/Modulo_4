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


//-------------- RETO 1 ----------------


// let params = ["",]
// let sql = "SELECT s.first_name, s.last_name, a.title FROM students AS s  INNER JOIN stats AS m ON(s.student_id = m.student_id) INNER JOIN subjects AS a ON(m.subject_id = a.subject_id); ";

// connection.query(sql, params, function(error, result)
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

//-------------- RETO 2 ----------------

// let params = []
// let sql = "SELECT p.first_name, p.last_name, s.title FROM teachers AS p INNER JOIN subject_teacher AS u ON(p.teachers_id = u.teacher_id) INNER JOIN subjects AS s ON(u.subject_id = s.subject_id); ";

// connection.query(sql, params, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })

//-------------- RETO 3 ----------------

// let params = []
// let sql = "SELECT s.title, p.first_name, p.last_name, COUNT(*) FROM students AS a INNER JOIN clases AS c ON(c.clases_id = a.clases_id) INNER JOIN subject_teacher AS u ON(c.clases_id = u.clases_id) INNER JOIN subjects AS s ON(u.subject_id = s.subject_id) INNER JOIN teachers AS p ON(u.teacher_id = p.teachers_id) GROUP BY c.clases_id; ";

// connection.query(sql, params, function (error, result) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Columna Creada")
//         console.log(result)
//     }
// })
