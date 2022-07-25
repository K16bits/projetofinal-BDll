const Evento = require('../models/Evento.js')
const Usuario = require('../models/Usuario.js')

const { Router } = require('express')
const router = Router()

//--------------------- CRUD  --------------------

router.post('/criar-usuario',async (req,res)=>{
  const {nome,senha,tipo} = req.body;
  const user = await Usuario.create({nome,senha,tipo})
  res.send(user)
})

router.post('/login',async (req,res)=>{
  const {nome,senha} = req.body;
  // console.log(nome)
  const user = await Usuario.findOne({nome}).lean()
  console.log(user)
  if(!user){
    return res.status(400).json({msg:"Usuario inválido"})
  }

  if(senha===user.senha){
    if(user.tipo === 'adm'){return res.redirect('/adm')}  
    return res.redirect('/user')
  }

  return res.status(400).json({msg:"Usuario e/ou senha inválida"})
})

router.post('/criar-evento', async(req, res) => {
  const {nome} = req.body
  const eventoData = await Evento.create({nome,status:false})
  res.redirect('/adm')
})

router.post('/adionar-no-evento/_id', async(req, res) => {
  const {nome} = req.body
  const eventoData = await Evento.findByIdAndUpdate(_id,{ $push:{participantes:{nome:nome}} })
  res.status(200).json({data:eventoData})
})

router.post('/criar-atividade', async(req, res) => {
  const {_id,nome} = req.body
  const data = await Evento.findByIdAndUpdate(_id,{ $push:{atividades:{nome:nome}} })
  res.status(200).json({data})
})

router.post('/adicionar-na-atividade', async(req, res) => {
  const {_id,nome} = req.body
  const data = await Evento.findByIdAndUpdate(_id,{ $push:{atividades:{nome:nome}} })
  res.status(200).json({data})
})

module.exports = router