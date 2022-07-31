const express = require("express")
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express()
const PORT = 3000
const router = require('./routes/index.routes.js');
const routerPages = require("./routes/pages.routes.js");
require('./database.js')

app.use(express.static(path.join(__dirname, 'public'))); //CSS
// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"))
app.engine('hbs', engine({
    defaultLayout:"main",
    partialsDir: path.join(app.get("views"), "partials"),
    extname:'.hbs'
}));
app.set('view engine', 'hbs');


app.use(express.json())
app.use(router)
app.use(routerPages)

app.listen(PORT,()=>{
    console.log(`server running in port:${PORT}\nhttp://localhost:${PORT}`)
})