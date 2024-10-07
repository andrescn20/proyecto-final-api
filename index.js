const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(bodyParser.json());

// Inicializar la base de datos
const db = new sqlite3.Database("./event-management.db", (err) => {
  if (err) {
    console.error("Error opening database: " + err.message);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS users (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             username TEXT UNIQUE,
             password TEXT,
             email TEXT
           )`);

    db.run(`CREATE TABLE IF NOT EXISTS events (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             name TEXT,
             description TEXT,
             date TEXT,
             createdBy INTEGER
           )`);

    db.run(`CREATE TABLE IF NOT EXISTS user_events (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             userId INTEGER,
             eventId INTEGER
           )`);
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  const query = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
  db.run(query, [username, password, email], function (err) {
    if (err) {
      return res.status(400).send({ message: "Error registrando usuario" });
    }
    res.status(201).send({ message: "Usuario registrado con éxito" });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.get(query, [username, password], (err, user) => {
    if (err || !user) {
      return res.status(404).send({ message: "Credenciales inválidas" });
    }

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  });
});

app.get("/events", (req, res) => {
  const query = `SELECT * FROM events`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).send({ message: "Error al tratar de obtener los eventos" });
    }
    res.status(200).send(rows);
  });
});

app.post("/events", (req, res) => {
  const { name, description, date, createdBy } = req.body;

  const query = `INSERT INTO events (name, description, date, createdBy) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, description, date, createdBy], function (err) {
    if (err) {
      return res.status(500).send({ message: "Error creando eventos" });
    }
    res.status(201).send({ id: this.lastID });
  });
});

app.post("/register-event", (req, res) => {
  const { userId, eventIds } = req.body; // Lista de eventos

  const query = `INSERT INTO user_events (userId, eventId) VALUES (?, ?)`;
  eventIds.forEach((eventId) => {
    db.run(query, [userId, eventId], function (err) {
      if (err) {
        return res.status(500).send({ message: "Error inscribiendo usuario al evento" });
      }
    });
  });

  res.status(200).send({ message: "Usuario inscrito exitosamente" });
});

app.get("/user/:userId/events", (req, res) => {
  const userId = req.params.userId;

  const query = `SELECT e.* FROM events e
                   JOIN user_events ue ON e.id = ue.eventId
                   WHERE ue.userId = ?`;

  db.all(query, [userId], (err, rows) => {
    if (err) {
      return res.status(500).send({ message: "Error obteniendo los eventos asociados al usuario" });
    }
    res.status(200).send(rows);
  });
});
