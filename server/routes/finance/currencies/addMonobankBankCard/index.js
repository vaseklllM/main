const { Router } = require("express")
const router = Router()
const checkAuth = require("../../../../funcs/checkAuth")
const addMonobankToken = require("./addToken")
const getUserInfoByToken = require("./getUserInfoByToken")

/** добавлення банківської карти */
router.post("/addMonobankBankCard", checkAuth, async (req, res) => {
  const { token } = req.body

  const bankUserInfo = await getUserInfoByToken(token)

  if (!bankUserInfo.ok) {
    res.status(403).json({ message: "Помилка при отриманні даних з монобанку" })
    return undefined
  }

  const isAdd = await addMonobankToken(req.user._financeId, token)

  if (isAdd) {
    res.status(201).json({ message: "Токен успішно добавлено" })
  } else {
    res.status(403).json({ message: "Такий токен вже існує" })
  }
})

module.exports = router
