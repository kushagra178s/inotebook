const mongoose = require("mongoose");
const {Schema}  = mongoose;

const UserSchema = new Schema({
  title: {
    type : String,
    required : true
  }, 
  description :  {
    type : String,
    required : true,
    unique : true
  },

  tag: {
    type : String,
    defult : "General"
  },
  date: {
    type : Date,
    required : Date.now
  } 
});


module.exports = mongoose.model('notes', NotesSchema);
