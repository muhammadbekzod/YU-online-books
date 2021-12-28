const { Router } = require('express')
const router = Router()
const { 
    getAllTravels, 
    getTravelbyID, 
    addTravelBook,
    updateTravelBook,
    removeTravelBook
} = require('../controllers/travelControllers')
//CRUD

router.get('/', getAllTravels)
router.get('/:id', getTravelbyID)
router.post('/add', addTravelBook)
router.put('/:id', updateTravelBook)
router.delete('/:id', removeTravelBook)

module.exports = router