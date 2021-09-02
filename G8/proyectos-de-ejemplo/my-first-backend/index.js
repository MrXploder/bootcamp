const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

let IdRef = 3;
let Pacientes = [
  { id: 1, nombre: "Luis", apellido: "Arancibia", edad: 29 },
  { id: 2, nombre: "Christian", apellido: "Diaz", edad: 28 },
  { id: 3, nombre: "Angeles", apellido: "Oliva", edad: 27 },
];

const PacientesRouter = express.Router();

PacientesRouter.get("/pacientes", (req, res) => {
  res.json(Pacientes);
})
  .get("/pacientes/:id", (req, res) => {
    const paciente = Pacientes.find(
      (paciente) => paciente.id === Number.parseInt(req.params.id)
    );

    if (paciente) {
      res.json(paciente);
    } else {
      res.sendStatus(404);
    }
  })
  .post("/pacientes", (req, res) => {
    const nuevoPaciente = { ...req.body, id: ++IdRef };
    Pacientes.push(nuevoPaciente);
    res.json(nuevoPaciente);
  })
  .put("/pacientes/:id", (req, res) => {
    const pacienteIndex = Pacientes.findIndex(
      (paciente) => paciente.id === Number.parseInt(req.params.id)
    );

    if (pacienteIndex !== -1) {
      Pacientes[pacienteIndex] = {
        ...req.body,
        id: Pacientes[pacienteIndex].id,
      };
      res.send(Pacientes[pacienteIndex]);
    } else {
      res.sendStatus(404);
    }
  })
  .delete("/pacientes/:id", (req, res) => {
    const pacienteIndex = Pacientes.findIndex(
      (paciente) => paciente.id === Number.parseInt(req.params.id)
    );

    if (pacienteIndex !== -1) {
      Pacientes.splice(pacienteIndex, 1);
      res.send();
    } else {
      res.sendStatus(404);
    }
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/api", PacientesRouter);
app.listen(3000, undefined, () => {
  console.log("Servidor iniciado");
});
