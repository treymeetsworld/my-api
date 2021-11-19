import { Shoes } from "../models/Shoes.js";

function index(req,res){
  Shoes.find({})
  .then(shoe => {
    res.json(shoe)
  })
}

function show(req,res){
Shoes.findById(req.params.id)
.then(shoe => {
  res.json(shoe)
})
}

function create(req,res){
Shoes.create(req.body)
.then(shoe =>{
  res.json(shoe)
})
}

function update(req,res){
Shoes.findByIdAndUpdate(req.params.id,req.body,{new: true})
  .then(shoe => {
    res.json(shoe)
  })
}

function deleteShoe(req,res){
Shoes.findByIdAndDelete(req.params.id)
.then(shoe => {
  res.json(shoe)
})
}

export {
  index,
  show,
  create,
  update,
  deleteShoe as delete,
}

