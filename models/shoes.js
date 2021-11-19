import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shoeSchema = new Schema({
  name: String,
  type: String,
  condition: String,
},{
  timestamps: true
})

const Shoes = mongoose.model('Shoes', shoeSchema)

export {
  Shoes
}