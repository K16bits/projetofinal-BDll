const Evento = require("../models/Evento")

module.exports = {
    async fiscalHome(req,res){
        const eventoData = await Evento.find({}).lean()
        res.render("fiscal/gerenciar_evento",{eventoData})
    },

    async listarAtividades(req,res){
        const {_id} = req.query
        // console.log(_id)
        const eventoData = await Evento.findById(_id).lean() // SubDocumento não está com o metodo lean()
        res.render("fiscal/listar_atividades",{Atividades:eventoData.atividades,EventoID:_id})
    },

    async validarPresenca(req,res){
        const {eventoid,atividadeid} = req.query
        res.render("fiscal/validar_presenca",{eventoid})
    }
}