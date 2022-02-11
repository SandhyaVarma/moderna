var mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/moderna')

var userSchema = mongoose.Schema({
  name:String,
  email:String,
  phone:Number,
  age:Number,
  test:String,
  Dose1:String,
  Dose2:String,
  details:String
})

module.exports = mongoose.model('user', userSchema)