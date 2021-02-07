const checkAuth = require("../../../../funcs/checkAuth")
const { Router } = require("express")
const router = Router()
const Finance = require("../../../../models/finance")

router.get("/getBankCards", checkAuth, async (req, res) => {
  const finance = await Finance.findById(req.user._financeId)
  res.status(200).json(convertBanksData(finance.currencies.bankCards))
})

function convertBanksData(bankCards) {
  return {
    monobank: bankCards.monobank.map((i) => ({
      isActive: i.isActive,
      _id: i._id,
      token: getLastSymbols(i.token),
      user: {
        name: i.user.name,
      },
    })),
    privatbank: bankCards.privatbank.map((i) => ({ isActive: i.isActive, _id: i._id })),
  }
}

function getLastSymbols(str, pcs = 6) {
  return str
    .split("")
    .map((el, idx) => {
      if (idx >= str.length - pcs) return el
      else return "*"
    })
    .join("")
}

module.exports = router
