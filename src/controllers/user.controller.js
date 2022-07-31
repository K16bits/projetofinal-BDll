const Evento = require("../models/Evento")

module.exports = {
    home(req,res){
        res.render("login")
    },

    criarLogin(req,res){
        res.render("criarLogin")
    },

    async eventosHome(req,res){
        const eventoData = await Evento.find({}).lean()
        console.log(eventoData)
        res.render("user/eventos",{eventoData})
    },

    async atividades(req,res){
        const _id = "62ddacfed8f986f103ac0077"
        const eventoData = await Evento.findById(_id).lean()
        console.log(eventoData)
        // res.render('user/atividades',{Atividades:eventoData.atividades})
    },

    increverSeEvento(req,res){
            const _id = req.params
            res.render('user/confirmaEvento',{id:_id})
    },

    async confirmarEvento(req,res){
        const {email,idEvento} = req.body;
        const data = await Evento.findByIdAndUpdate({_id:idEvento},{$push:{participantes:{
            email:email
        }}})
        res.redirect('/user')
    },
}