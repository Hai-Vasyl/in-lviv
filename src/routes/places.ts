import { Router } from "express"
import {
  create_place,
  update_place,
  delete_place,
  get_places,
  get_place,
} from "../controllers/places"
import auth from "../middlewares/auth.middleware"
import { check } from "express-validator"

const router = Router()

router.post(
  "/create-place",
  auth,
  [
    check("title", "This field cannot be empty!").isLength({ min: 1 }),
    check("description", "This field cannot be empty!").isLength({ min: 1 }),
    check("location", "This field cannot be empty!").isLength({ min: 1 }),
    check("image", "This field cannot be empty!").isLength({ min: 1 }),
  ],
  create_place
)

router.post(
  "/update-place/:placeId",
  auth,
  [
    check("title", "This field cannot be empty!").isLength({ min: 1 }),
    check("description", "This field cannot be empty!").isLength({ min: 1 }),
    check("location", "This field cannot be empty!").isLength({ min: 1 }),
    check("image", "This field cannot be empty!").isLength({ min: 1 }),
  ],
  update_place
)

router.delete("/delete-place/:placeId", auth, delete_place)

router.get("/get-places", get_places)

router.get("/get-place/:placeId", get_place)

export default router
