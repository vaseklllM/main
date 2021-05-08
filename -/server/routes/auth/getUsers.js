const { Router } = require("express")
const router = Router()

const User = require("../../models/User")

/** получение списка пользователей */
router.get("/getUsers", async (req, res) => {
  const candidate = await User.find({}, { email: 1, nickname: 1 })
  res.status(201).json({ data: candidate })
})

module.exports = router
