import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from '../src/lib/gtag'
import { usePageView } from '../src/lib/gtag'

export default function App({ Component, pageProps }: AppProps) {
  usePageView()
  return(
    <>
    <GoogleAnalytics/>
     <Component {...pageProps} />
    </>
  ) 
}
