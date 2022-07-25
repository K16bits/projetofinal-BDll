const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventoSchema = new Schema(
  {
    nome: String,
    status: Boolean,
    participantes:[{
      nome: String,
    }],
    atividades:[{
        nome:String,
        inscritos:[{nome: String
        }]
      }]
  },
  {
    timestamps: true,
  }
);

const Evento = model("Evento", eventoSchema);
module.exports = Evento