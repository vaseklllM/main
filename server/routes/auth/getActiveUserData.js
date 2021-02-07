const { Router } = require("express")
const router = Router()
const checkAuth = require("../../funcs/checkAuth")

/** получение списка пользователей */
router.get("/getActiveUserData", checkAuth, async (req, res) => {
  const { _id, email, nickname } = req.user
  res.status(201).json({ user: { _id, email, nickname } })
})

module.exports = router
