const Travel = require('../models/Travel.model')
//Method: Get
//Desct: Get all trabvel books
const getAllTravels = async (req, res)=>{
    try{
        const travels = await Travel.find()
    
        res.status(200).json({
            massage:'success',
            travels: travels.reverse()
        })
    }catch (err){
        res.send(err)
    }
}


//Method: Get
//Desct: Get one travel books by id
const getTravelbyID = async (req, res)=>{
    try{
        const travel = await Travel.findById(req.params.id)
    
        if(!travel){
            return res.status(404).json({
                message: 'Not FOund'
            })
        }
        return res.status(200).json({
            message: 'success',
            travel
        })
        }catch(err){    
            res.send(err)
        }
}


const addTravelBook = async (req, res)=>{
    try{
        const {title, image, descr} = req.body

        const newTravel = await Travel.create({
            title,
            image,
            descr
        })
        res.status(201).json({
            message:'success',
            newTravel
        })
        }catch(err){    
            res.send(err)
        }
}

// Method: Put
//Descr: Edit travel book by its ID

const updateTravelBook = async (req, res)=>{
    try{
        const {title, image, descr} = req.body

        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id,{
            title,
            image,
            descr
        })
        res.status(200).json({
            message:'success',
            updatedTravel
        })
        }catch(err){    
            res.send(err)
        }
}


// Method: Delete
//Descr: Removing travel book by ID

const removeTravelBook = async (req, res)=>{
    try{
        const {title, image, descr} = req.body

        const updatedTravel = await Travel.findByIdAndRemove(req.params.id)

        res.status(200).json({
            message:'delete',
            
        })
        }catch(err){    
            res.send(err)
        }
}


module.exports = {
    getAllTravels,
    getTravelbyID,
    addTravelBook,
    updateTravelBook,
    removeTravelBook
}