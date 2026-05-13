import mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombre:{type:String, require:true},
    precio:{type:String, require:true}
});

const examenModel = mongoose.model("EXAMEN", userSchema);
export default examenModel;