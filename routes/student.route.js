const {Router} = require('express')
const { students_admission } = require('../controllers/students.controller')

const router=Router()

router.get('/',students_admission)

router.post('/',(req,res)=>{
    res.send('post')
})



module.exports=router