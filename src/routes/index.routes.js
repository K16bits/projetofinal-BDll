const Evento = require("../models/Evento.js");
const Usuario = require("../models/Usuario.js");

const { Router } = require("express");
const router = Router();

//--------------------- CRUD  --------------------

router.post("/criar-usuario", async (req, res) => {
  const {
    nome,
    documento,
    telefone,
    dataNascimento,
    endRua,
    endNumero,
    endComplemento,
    endCep,
    endBairro,
    endCidade,
    endEstado,
    endPais,
    email,
    senha,
  } = req.body;

  const user = await Usuario.create({
    nome,
    documento,
    telefone,
    dataNascimento,
    endRua,
    endNumero,
    endComplemento,
    endCep,
    endBairro,
    endCidade,
    endEstado,
    endPais,
    email,
    senha,
    tipo: "adm",
  });
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const user = await Usuario.findOne({ email }).lean();
  console.log(user)
  if (!user) {
    return res.status(400).json({ msg: "Usuario inválido" });
  }

  if (senha === user.senha) {
    if (user.tipo === "adm") {
      return res.redirect("/adm");
    } else if (user.tipo === "fiscal") {
      return res.redirect("/fiscal");
    }
    return res.redirect("/user");
  }

  return res.status(400).json({ msg: "Usuario e/ou senha inválida" });
});

router.post("/criar-evento", async (req, res) => {
  const { nome } = req.body;
  const eventoData = await Evento.create({ nome, status: false });
  res.redirect("/adm");
});

router.post("/adionar-no-evento/_id", async (req, res) => {
  const { nome } = req.body;
  const eventoData = await Evento.findByIdAndUpdate(_id, {
    $push: { participantes: { nome: nome } },
  });
  res.status(200).json({ data: eventoData });
});

router.post("/criar-atividade", async (req, res) => {
  const {
    idEvento,
    titulo,
    horaInicio,
    horaFim,
    palestrantes,
    vagas,
    horasCertificado,
    local,
  } = req.body;

  const data = await Evento.findByIdAndUpdate(
    { _id: idEvento },
    {$push: {
        atividades: {
          titulo,
          horaInicio,
          horaFim,
          palestrantes,
          vagas,
          horasCertificado,
          local,
        },
      },
    }
  );
  res.redirect(`/adm/gerenciar_evento?_idEvento=${idEvento}`);
});

router.post("/adicionar-na-atividade", async (req, res) => {
  const { _id, nome } = req.body;
  const data = await Evento.findByIdAndUpdate(_id, {
    $push: { atividades: { nome: nome } },
  });
  res.status(200).json({ data });
});

router.post("/modificar_acesso", async (req, res) => {
  const { email, tipo } = req.body;
  const data = await Usuario.findOneAndUpdate(
    { email },
    { $set: { tipo } },
    { new: true }
  );
  console.log(data);
  res.redirect("/adm/gerenciar_fiscal");
});

module.exports = router;
