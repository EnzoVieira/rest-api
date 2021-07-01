import { Router } from "express"
import { UserController } from "../controllers/UserController"
import { verifyToken } from "../middlewares/tokenverify"

const router = Router()

router.post("/register", UserController.register)
router.post("/authenticate", UserController.authenticate)
router.put("/edit_user", verifyToken, UserController.editUser)

export default router
