const Evento = require('../models/Evento.js')
const Usuario = require('../models/Usuario.js')
const { Router } = require('express')
const routerPages = Router()

const userControl = require('../controllers/user.controller')
const fiscalControl = require('../controllers/fiscal.controller.js')
const admControl = require('../controllers/adm.controller.js')
//--------------------- PAGES  --------------------

routerPages.get('/',userControl.home)
routerPages.get('/criarlogin',userControl.criarLogin)
routerPages.get('/user',userControl.eventosHome)
routerPages.get('/user/atividades',userControl.atividades)
routerPages.get('/evento/:_id',userControl.increverSeEvento)
routerPages.get('/user/confirma?:_id',userControl.confirmarEvento)


//ADM

routerPages.get('/adm',admControl.admHome)
routerPages.get('/adm/criar_evento',admControl.criarEvento)
routerPages.get('/adm/gerenciar_evento?:_idEvento',admControl.gerenciarEventoID)
routerPages.get('/adm/remover_evento?:_idEvento',admControl.removerEventoID)
routerPages.get('/adm/criar-atividade?:_idEvento',admControl.criarAtividadeID)
routerPages.get('/adm/gerenciar_fiscal',admControl.gerenciarFiscal)
routerPages.get('/adm/modificar_usuario',admControl.modificarUsuario)
routerPages.get('/adm/gerenciar_participantes',admControl.gerenciarParticipantes)
routerPages.get('/adm/criar_fiscal',admControl.criarFiscal)

// Fiscal
routerPages.get('/fiscal',fiscalControl.fiscalHome)
routerPages.get('/fiscal/evento/atividades?:_id',fiscalControl.listarAtividades)
routerPages.get('/fiscal/evento/validar/',fiscalControl.validarPresenca)

module.exports = routerPages