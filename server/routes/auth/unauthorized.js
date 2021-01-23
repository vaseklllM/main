const { Router } = require("express")
const router = Router()

router.all("/unauthorized", async (req, res) => {
  res.status(401).json({ message: "unauthorized" })
  // res.status(401).json({ message: "Доступ запрещен, войдите в аккаунт" })
})

module.exports = router
