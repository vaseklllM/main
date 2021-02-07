function createDefaultData() {
  require("./createAdminAccount")()
  require("./createFinance")()
}

module.exports = createDefaultData
