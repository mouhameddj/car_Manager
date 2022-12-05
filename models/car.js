const mongoose =require('mongoose');
const placeModels= mongoose.Schema({
    Nom_car:{
        type:String,
  

    },
    N_place:{
        type:String,
  

    },
    hashCode:{
        type:String,
  

    },
    duree:{
        type:String,
  

    }
}

);
module.exports=mongoose.model('place',placeModels)