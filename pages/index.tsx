import Head from "next/head"
import App from "@/components/App"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Все приложения в одном месте</title>
      </Head>
      <App />
    </div>
  )
}
