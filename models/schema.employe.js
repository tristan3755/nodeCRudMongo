let mongoose=require('mongoose')

let schemaEmployes= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
})

mongoose.model('employés',schemaEmployes)