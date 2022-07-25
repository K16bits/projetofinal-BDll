const Evento = require('../models/Evento.js')
const { Router } = require('express')
const routerPages = Router()

//--------------------- PAGES  --------------------

routerPages.get('/', async(req, res) => {
    res.render("login")
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
    res.render('user/confirmaEvento')
})

routerPages.get('/adm', async(req, res) => {
    const eventoData = await Evento.find({}).lean()
    res.render("adm/controle",{eventoData})
})

routerPages.get('/adm/criar_evento', async(req, res) => {
    res.render("adm/criar_evento")
})

routerPages.get('/adm/gerenciar_evento/:_id', async(req, res) => {
    const {_id} = req.params
    const eventoData = await Evento.findById(_id).lean()
    console.log(eventoData)
    res.render("adm/gerenciar_evento",{eventoData})
})

routerPages.get('/fiscal', async(req, res) => {
    const eventoData = await Evento.find({}).lean()
    res.render("fiscal/gerenciar_evento",{eventoData})
})

routerPages.get('/fiscal/evento/atividades/', async(req, res) => {
    const {_id} = req.query
    const eventoData = await Evento.findById(_id).lean() // SubDocumento não está com o metodo lean()
    res.render("fiscal/listar_atividades",{Atividades:eventoData.atividades,EventoID:_id})
})

routerPages.get('/fiscal/evento/validar/', async(req, res) => {
    const {eventoid,atividadeid} = req.query
    res.render("fiscal/validar_presenca",{eventoid})
})

module.exports = routerPages