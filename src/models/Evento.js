const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventoSchema = new Schema(
  {
    nome: String,
    status: Boolean,
    participantes: [
      {
        email: String,
      },
    ],
    atividades: [{
        titulo: String,
        horaInicio: String,
        horaFim: String,
        palestrantes: String,
        vagas: Number,
        horasCertificado: Number,
        local: String,
        abertoInscricoes: Boolean,
        inscritos: [{ email: String }],
      }],
  },
  {
    timestamps: true,
  }
);

const Evento = model("Evento", eventoSchema);
module.exports = Evento;
