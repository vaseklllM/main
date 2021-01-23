import { SERVER_URL } from "../utils/config"

interface Iparams {
  method?: "POST" | "GET"
  body?: any
}

export interface IfetchDataParams {
  ok: boolean
}

export default async function fetchData(url: string, params?: Iparams): Promise<any> {
  const bodyJson = params?.body && JSON.stringify(params?.body)

  try {
    const res = await fetch(getUrl(url), {
      body: bodyJson,
      method: params?.method ?? "GET",
      headers: new Headers({
        Authorization: localStorage?.token,
        "Content-Type": "application/json",
      }),
    })

    let data = (await res.json()) || undefined

    if (res.ok && res.status !== 401) {
      return { ok: true, data }
    } else {
      return { ok: false, data }
    }
  } catch (error) {
    return { ok: false }
  }
}

function getUrl(url: string): string {
  if (url.indexOf("http://") !== -1 || url.indexOf("https://") !== -1) return url
  else return `${SERVER_URL}${url}`
}
