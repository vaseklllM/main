module.exports = function (app) {
  app.use("/api/auth", require("./auth/login")) // вход в акканут
  app.use("/api/auth", require("./auth/registration")) // реєстрація
  app.use("/api/auth", require("./auth/unauthorized")) // пользователь не авторизирован
  app.use("/api/auth", require("./auth/getUsers")) // вход в акканут
  app.use("/api/auth", require("./auth/getActiveUserData")) // вход в акканут
  /** finance */
  app.use("/api/finance", require("./finance/currencies/getBankCards")) // загрузка списка банківських карт
  app.use("/api/finance", require("./finance/currencies/addMonobankBankCard")) // добавлення банківської карти
}
