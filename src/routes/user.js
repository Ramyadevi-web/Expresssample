import { Router } from "express";
import UserController from "../controller/user.js"

const router = Router();

router.get('/',UserController.getAllUsers)
router.get('/:id',UserController.getUserById)
router.post('/',UserController.addUser)
router.put('/:id',UserController.editByUserId)
router.delete('/:id',UserController.deleteByUserId)

export default router
