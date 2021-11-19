import { Router } from 'express'
const router = Router()
import * as shoesCtrl from '../controllers/shoes.js'
/* GET users listing. */
router.get('/shoes',shoesCtrl.index)

router.get('/shoes/:id',shoesCtrl.show)

router.post('/shoes',shoesCtrl.create)

router.put('/shoes/:id',shoesCtrl.update)

router.delete('/shoes/:id',shoesCtrl.delete)

export {
  router
}
