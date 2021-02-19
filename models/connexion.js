let mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/crudExo",(erreur)=>{
    if(!erreur){
console.log("mango db connectée")
    }else{
        console.log("mongoDB probleme"+erreur)
    }
})

require("./schema.employe")

    