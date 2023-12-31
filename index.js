console.log("Servidor backend com node");

const porta = 8080;

const express = require("express");

const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json())

const lista = [
  {
    nome: "Lucas Vinicius",
    telefone: "11982668958",
    email: "lcasgalindo@gmail.com",
  },
  {
    nome: "Jota",
    telefone: "11982668958",
    email: "lcasgalindo@gmail.com",
  },
  {
    nome: "Jao",
    telefone: "11982668958",
    email: "lcasgalindo@gmail.com",
  },
];

app.route("/login").get(
  (request, response) => {
    const payload = {user: "antonio", profile: "admin "}
    const token = jwt.sign(JSON.stringify(payload), "ABC123", {})
    console.log("token:", token)

    const resposta = {usuario: "antonio", token}
    response.status(200).json(resposta)
  }
)

app.route("/").get((request, response) => {
  console.log("Get executado");

  response.status(200).json(lista);
});

app.listen(porta, () => {
  console.log("Servidor Node Ativado na porta " + porta);
});

app.route("/").post((request, response) => {
  const objBody = request.body;
  console.log("BODY:", request.body)
  lista.push(objBody)
  response.status(200).send("objeto cadastrado")
});
