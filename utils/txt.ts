export default {
  /**
   * Из масива слов делает одну строку
   * @param stringArr массив слов
   * @param symbol символ между словами
   */
  join: function (stringArr: string[], symbol: string = " "): string {
    let str: string = ""

    stringArr.forEach((el) => {
      if (str !== "") {
        if (typeof el === "string" && el !== "") str = `${str}${symbol}${el}`
      } else str = el
    })

    return str
  },
}
