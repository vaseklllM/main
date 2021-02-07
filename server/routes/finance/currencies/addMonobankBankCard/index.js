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
    res.status(403).json({ ok: false, message: "Неправильний токен" })
    return undefined
  }

  addMonobankToken(req.user._financeId, token)

  res.status(201).json({ ok: bankUserInfo.ok })
})

module.exports = router
