const router = require("express").Router()
const { request, response } = require("express")
const UserControlle = require("../controller/user") //importando o controlle


router.post("/login", UserControlle.login)
router.post("/register", UserControlle.created) //

router.get("/register", (request, response) =>{
    response.render("register")
})

router.get("/login", (request, response) =>{
    response.render("login")
})


module.exports = router
