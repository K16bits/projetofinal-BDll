const Evento = require('../models/Evento.js')
const { Router } = require('express')
const routerPages = Router()

//--------------------- CRUD  --------------------
routerPages.get('/user', async(req, res) => {
    const eventoData = await Evento.find({}).lean()
    res.render("user/index",{eventoData})
})

routerPages.get('/user/atividades', async(req, res) => {

    const _id = ""
    const eventoData = await Evento.findById(_id)
    console.log(eventoData.atividades)
    res.render('/user/atividades',{eventoData:eventoData.atividades})
})
 
module.exports = routerPages