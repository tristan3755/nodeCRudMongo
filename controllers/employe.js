let express=require("express")

let router=express.Router()

router.get("/",(requete,reponse)=>{
    reponse.json('yo')
})

module.exports=router