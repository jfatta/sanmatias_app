import '../styles/globals.css'
import Analytics from "../scripts/analytics"
import { geistSans, geistMono } from '../lib/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable}`}>
      <Analytics />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
