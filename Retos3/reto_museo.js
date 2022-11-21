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


//-------------- QUERY 1 ----------------


// let params = ["prestado"]
// let sql = "SELECT p.nombre, l.nombre, t.fecha_devolucion, d.nombre, d.apellido, d.email FROM piezas AS p INNER JOIN dueños_piezas AS dp ON(p.idPiezas = dp.idPiezas) INNER JOIN dueños AS d ON(dp.idDueños = d.idDueños) INNER JOIN expositores_piezas AS ep ON(p.idPiezas = ep.idPiezas) INNER JOIN expositores AS l ON(ep.idExpositores = l.idExpositores) INNER JOIN posesiones_piezas AS pp ON(p.idPiezas = pp.idPiezas) INNER JOIN posesiones AS t ON(pp.idPosesiones = t.idPosesiones) WHERE estado_posesion = ?; ";

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

//-------------- QUERY 2 ----------------


let params = ["prestado"]
let sql = "SELECT estado_en_museo, COUNT(*) FROM piezas GROUP BY estado_en_museo ORDER BY COUNT(*) DESC;";

connection.query(sql, params, function (error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Columna Creada")
        console.log(result)
    }
})