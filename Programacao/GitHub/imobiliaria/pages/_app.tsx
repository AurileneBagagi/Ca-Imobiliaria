import '../styles/globals.css'
import '../styles/Home.module.css'
import '../components/navbar/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
