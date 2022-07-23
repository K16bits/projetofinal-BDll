const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventoSchema = new Schema(
  {
    nome: String,
    status: Boolean,
    atividades:[{
        nome:String,
        inscritos:[{cpf: String
        }]
      }]
  },
  {
    timestamps: true,
  }
);

const Evento = model("Evento", eventoSchema);
module.exports = Evento