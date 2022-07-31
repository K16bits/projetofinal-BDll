const Evento = require("../models/Evento")
const Usuario = require("../models/Usuario")

module.exports = {
    async admHome(req,res){
        const eventoData = await Evento.find({}).lean()
        res.render("adm/controle",{eventoData})
    },

    criarEvento(req,res){
        res.render("adm/criar_evento")
    },

    async gerenciarEventoID(req,res){
        const {_idEvento} = req.query
        const eventoData = await Evento.findById({_id:_idEvento}).lean()
        res.render("adm/gerenciar_evento",{eventoData,_idEvento}) 
    },

    async removerEventoID(req,res){
        const {_idEvento} = req.query
        const eventoData = await Evento.findByIdAndDelete({_id:_idEvento})
        console.log(eventoData)
        res.redirect('/adm')
    },

    criarAtividadeID(req,res){
        const {_idEvento} = req.query
        // console.log(_idEvento)
        res.render('adm/criar_atividade',{_idEvento})
    },

    async gerenciarFiscal(req,res){
        const usuarios = await Usuario.find().lean()
        // console.log(usuarios)
        res.render('adm/gerenciar_fiscal',{usuarios})
    },

    modificarUsuario(req,res){
        res.render('adm/modificar_usuario')
    },

    async gerenciarParticipantes(req,res){
        const usuarios = await Usuario.find().lean()
        // console.log(usuarios)
        res.render('adm/gerenciar_participantes',{usuarios})
    },

    async criarFiscal(req,res){
        res.render('adm/criar_fiscal')
    }
}