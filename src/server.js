const express = require ("express")
const app = express()
const path = require ("path") 



require("./database/conection")
const router = require("./routes/index")

app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/",  router)

const port = 8080
app.listen(port, () => (
    console.log("servidor rodando na porta 8080")
))


