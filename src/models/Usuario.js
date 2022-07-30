const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UsuarioSchema = new Schema({
  nome: String,
  documento: String,
  telefone: String,
  dataNascimento: String,
  endRua: String,
  endNumero: String,
  endComplemento: String,
  endCep: String,
  endBairro: String,
  endCidade: String,
  endEstado: String,
  endPais: String,
  email: String,
  senha: String,
  tipo: String,
});

const Usuario = model("Usuario", UsuarioSchema);
module.exports = Usuario;
