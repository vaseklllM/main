import Head from "next/head"
import App from "../components/App"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Все приложения в одном месте</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <App />
    </div>
  )
}
