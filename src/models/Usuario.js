const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UsuarioSchema = new Schema(
  {
    nome: String,
    tipo: String,
    senha: String
  }
);

const Usuario = model("Usuario", UsuarioSchema);
module.exports = Usuario