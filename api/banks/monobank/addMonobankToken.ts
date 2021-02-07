import fetchData, { IfetchDataParams } from "../../fetchData"

interface IServSaveMonobankToken extends IfetchDataParams {
  message?: string
}

// поучение списка пользователей
export default async function addMonobankToken(
  token: string
): Promise<IServSaveMonobankToken> {
  const res = await fetchData("api/finance/addMonobankBankCard", {
    method: "POST",
    body: { token },
  })

  return {
    ok: res.ok,
    message: res.data.message,
  }
}
