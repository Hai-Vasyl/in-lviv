import { Place } from "../models"
import { validationResult } from "express-validator"

export const create_place = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors)
    }
    const { userId } = req

    const place = new Place({
      ...req.body,
      date: new Date(),
      owner: userId,
    })
    const newPlace = await place.save()

    res.json(newPlace)
  } catch (error) {
    res.status(400).json(`Creating place error: ${error.message}`)
  }
}

export const update_place = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors)
    }

    const { placeId } = req.params

    const place = await Place.updateOne(
      { _id: placeId },
      { ...req.body, date: new Date() },
      { new: true }
    )

    res.json(place)
  } catch (error) {
    res.status(400).json(`Updating place error: ${error.message}`)
  }
}

export const delete_place = async (req: any, res: any) => {
  try {
    const { placeId } = req.params

    // TODO: NOT COMPLETED
    await Place.findByIdAndDelete(placeId)

    res.json({ message: "Place deleted successfully!" })
  } catch (error) {
    res.status(400).json(`Deleting place error: ${error.message}`)
  }
}
