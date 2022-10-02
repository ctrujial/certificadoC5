const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios',
});

conexion.connect((err) => {
    if (err) throw err;{
        console.log("Conectado correctamente");
    }
});

const consultar = "SELECT * FROM USUARIO";
conexion.query(consultar, (err, result) => {
    if (err) throw err;
    console.log(result);
});

conexion.end();