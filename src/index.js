const express = require("express")
const { engine } = require('express-handlebars');
const path = require('path');
const app = express()
const PORT = 3000
const router = require('./routes/index.routes.js');
const routerPages = require("./routes/pages.routes.js");
require('./database.js')

app.set("views", path.join(__dirname, "views"))
app.engine('hbs', engine({
    defaultLayout:"main",
    extname:'.hbs'
}));
app.set('view engine', 'hbs');

// app.engine("hbs", engine({
// layoutDir: path.join(app.get("views"), "layouts"),
// partialsDir: path.join(app.get("views"), "partials"),
// defaultLayout: "main",
// extname: ".hbs"
// }));

// app.set("view engine", "hbs");

app.use(express.json())
app.use(router)
app.use(routerPages)

app.listen(PORT,()=>{
    console.log(`server running in port:${PORT}\nhttp://localhost:${PORT}`)
})