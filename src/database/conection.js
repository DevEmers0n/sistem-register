const { Model } = require("sequelize")
const Sequelize = require("sequelize")
const configDatabase = require("../config")
const User = require("../model/user")

const conection = new Sequelize(configDatabase)

User.init(conection) 

conection.authenticate().then( () =>{
    console.log("conectado")
  })
  .catch( (error) =>{
    console.error("Não conectado")
  })

  module.exports = conection 