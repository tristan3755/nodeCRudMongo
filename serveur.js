let express=require("express")
let app=express()
require("./models/connexion.js")
let rappelControllersEmploye=require("./controllers/employe.js")

app.listen(3000,()=>{
    console.log('demarrage port 3000')
})

app.use('/pageEmployes',rappelControllersEmploye)

/*reprendre minute 15*/