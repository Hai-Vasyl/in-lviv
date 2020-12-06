import { Router } from "express"
import { User } from "../models"

const router = Router()

router.get("/", async (req, res) => {
  res.json("All works")
})

export default router
