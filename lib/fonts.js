import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const geistSans = localFont({
  src: '../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',
  variable: '--font-geist',
  display: 'swap',
})

export const geistMono = localFont({
  src: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
}) 