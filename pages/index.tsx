import Head from "next/head"
import App from "@/components/App"
import { status } from "@/enums"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Все приложения в одном месте</title>
      </Head>
      {status[status.no_data]}
      <App />
    </div>
  )
}
