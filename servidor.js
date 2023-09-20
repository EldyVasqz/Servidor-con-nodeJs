const http = require("http");
const chalk = require('chalk');

const HOST = "localhost";
const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/saludo") {

    const respuesta = {
      mensaje: "Bienvenidos"
    };
    res.writeHead(200, {"mensaje": "Esto es un mensaje"});
    res.end(JSON.stringify(respuesta));
  } else {
    res.writeHead(404, {"mensaje":"Ruta no encontrada"});
    res.end("Ruta no encontrada");
  }
});

server.listen(PORT, HOST, () => {
  console.log(chalk.green(`Servidor en ejecución en http://${HOST}:${PORT}/`));
});
