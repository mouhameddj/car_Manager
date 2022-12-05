const mongoose =require('mongoose');
const CarModels= mongoose.Schema({
    Matricule:{
        type:String,
  

    },
    personne:{
        type:String,
  

    },
    hashCode:{
        type:String,
  

    }
}

);
module.exports=mongoose.model('car',CarModels)