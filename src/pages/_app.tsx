import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  variable: '--nunito-font',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${nunito.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
