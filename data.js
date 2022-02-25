const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const Data = require('../models/schema')

router.get('/', async(req,res) => {
    try {
        const data = await Data.find()
        res.json(data)
}catch(err)
{
    res.send('Error ' + err)
}

})


router.get('/:id', async(req,res) => {
    try {
        const data = await Data.findById(req.params.id)
        res.json(data)
}catch(err)
{
    res.send('Error ' + err)
}

})

router.post('/', async (req.res) => {

    const user = new user({
        name: req.body.name,
        Dob: req.body.Dob,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNuber,
        Pan: req.body.Pan
    })

    try{
         const a1 =  await user.save()
         res.json(a1)
    }catch(err)
    res.send('Error')

})

router.patch('/:id',async(req,res) => {
     try{
           const user = await Data.findById(req.params.id)
           user.sub = req.body.sub
           const a1 = user.save() 
           res.json(a1)
     }catch(err)
      res.send('Error')
})
module.exports = router 
