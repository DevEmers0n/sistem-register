const UserModel = require("../model/user")
const bcrypt = require("bcryptjs")

async function created(request, response){
console.log(request.body)

    try {
      
const {name, email, password } = request.body 


const emailFound = await UserModel.findOne({where: {email: email}})

if(emailFound){
    return response.status(400).json({mensagem: "esse email já existe tabacudo"})
}

const salt = await bcrypt.genSalt()//gera um salto quaquer com letras e numeros.
const hash = await bcrypt.hash(password, salt)

const user = await UserModel.create({
    name,
    email,
    password:hash
}) 

user.save()

return response.redirect("/register.html")


    } catch (error) {
        console.log(error)
        
    }
}


async function login(request, response){
    try {
  
      const {email, password} = request.body
  
      const emailLogin = await UserModel.findOne({where: {email: email}})
  
      if(!emailLogin || !(await bcrypt.compare(password, emailLogin.password))){
        return response.status(404).json({erro: "email and password not found"})
      }
  
      return response.status(200).json({message: "!VOCÊ ACABA DE SER HACKEADO!"})
  
    } catch (error) {
      console.log(error)

    }
  }


module.exports = {
    created, 
    login,

}

