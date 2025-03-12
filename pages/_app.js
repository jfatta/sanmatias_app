import '../styles/globals.css'
import Analytics from "../scripts/analytics"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      <Analytics />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
