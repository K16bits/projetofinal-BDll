const Evento = require('../models/Evento.js')
const { Router } = require('express')
const router = Router()

//--------------------- CRUD  --------------------
router.get('/', async(req, res) => {
  const eventoData = await Evento.find({})
  res.render("index")
})

router.post('/add', async(req, res) => {
  const {nome,status} = req.body
  const eventoData = await Evento.create({nome,status})
  res.status(200).json({data:eventoData})
})

router.post('/atividade', async(req, res) => {
  const {_id,nome} = req.body
  const data = await Evento.findByIdAndUpdate(_id,{ $push:{atividades:{nome:nome}} })
  res.status(200).json({data})
})

module.exports = router