import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isLandingPage = router.pathname === '/'

  // 🧠 Add scroll lock only on landing page
  useEffect(() => {
    if (isLandingPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isLandingPage])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {!isLandingPage && <Footer />}
    </>
  )
}
