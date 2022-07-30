const Evento = require('../models/Evento.js')
const Usuario = require('../models/Usuario.js')
const { Router } = require('express')
const routerPages = Router()

//--------------------- PAGES  --------------------

routerPages.get('/', async(req, res) => {
    res.render("login")
})

routerPages.get('/criarlogin', async(req, res) => {
    res.render("criarLogin")
})

routerPages.get('/user', async(req, res) => {
    const eventoData = await Evento.find({}).lean()
    res.render("user/eventos",{eventoData})
})

routerPages.get('/user/atividades', async(req, res) => {
    const _id = "62ddacfed8f986f103ac0077"
    const eventoData = await Evento.findById(_id).lean()
    console.log(eventoData.atividades)
    res.render('user/atividades',{Atividades:eventoData.atividades})
})

routerPages.get('/evento/:_id', async(req, res) => {
    const _id = req.params
    res.render('user/confirmaEvento',{id:_id})
})


routerPages.get('/user/confirma?:_id',async(req,res)=>{
    const {_id} = req.query
    const data = await Evento.findByIdAndUpdate(_id,{$push:{participantes:{
        nome:"cris"
    }}})
    console.log(data)
})

routerPages.get('/adm', async(req, res) => {
    const eventoData = await Evento.find({}).lean()
    res.render("adm/controle",{eventoData})
})

routerPages.get('/adm/criar_evento', async(req, res) => {
    res.render("adm/criar_evento")
})

routerPages.get('/adm/gerenciar_evento?:_idEvento', async(req, res) => {
    const {_idEvento} = req.query
    const eventoData = await Evento.findById({_id:_idEvento}).lean()
    res.render("adm/gerenciar_evento",{eventoData,_idEvento})
})

routerPages.get('/adm/criar-atividade?:_idEvento', async(req, res) => {
    const {_idEvento} = req.query
    // console.log(_idEvento)
    res.render('adm/criar_atividade',{_idEvento})
})

routerPages.get('/adm/gerenciar_fiscal', async(req, res) => {
    const usuarios = await Usuario.find().lean()
    // console.log(usuarios)
    res.render('adm/gerenciar_fiscal',{usuarios})
})

routerPages.get('/adm/modificar_usuario', async(req, res) => {
    res.render('adm/modificar_usuario')
})

routerPages.get('/adm/gerenciar_participantes', async(req, res) => {
    const usuarios = await Usuario.find().lean()
    // console.log(usuarios)
    res.render('adm/gerenciar_participantes',{usuarios})
})

routerPages.get('/adm/criar_fiscal', async(req, res) => {
    res.render('adm/criar_fiscal')
})


routerPages.get('/fiscal', async(req, res) => {
    const eventoData = await Evento.find({}).lean()
    res.render("fiscal/gerenciar_evento",{eventoData})
})

routerPages.get('/fiscal/evento/atividades?:_id', async(req, res) => {
    const {_id} = req.query
    // console.log(_id)
    const eventoData = await Evento.findById(_id).lean() // SubDocumento não está com o metodo lean()
    res.render("fiscal/listar_atividades",{Atividades:eventoData.atividades,EventoID:_id})
})

routerPages.get('/fiscal/evento/validar/', async(req, res) => {
    const {eventoid,atividadeid} = req.query
    res.render("fiscal/validar_presenca",{eventoid})
})

module.exports = routerPages