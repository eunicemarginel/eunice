import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eunice + Coffee =</title>
        <meta name="description" content="Fullstack Developer who turns coffee into code ☕" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ☕ Navbar */}
      <Navbar />

      {/* ☕ Hero Section */}
      <main className="h-screen overflow-hidden bg-[#fdfbf7] flex items-center justify-center p-6">
        {/* <main className="min-h-screen w-full overflow-hidden bg-[#fdfbf7] flex items-center justify-center p-6 pt-32"> */}
        <div className="max-w-xl w-full text-center relative px-4">
          {/* Coffee ring */}
          <div
            className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-[url('/coffee-ring.png')] bg-no-repeat bg-contain opacity-30 pointer-events-none transform rotate-12 z-0"
            style={{ top: '-100px', right: '-40px' }}
          />

          {/* Main content */}
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4b2e2e] mb-4 leading-tight">
              It&apos;s Eunice!<br />Let&apos;s build something cool :)
            </h1>
            <p className="text-xs sm:text-sm text-[#5e4632] font-medium mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              fullstack dev | photog
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4">
              {/* Projects button → goes to /things?filter=projects */}
              <Link href={{ pathname: '/things', query: { filter: 'projects' } }} passHref>
                <button className="bg-[#4b2e2e] text-white px-6 py-2 rounded-full hover:bg-[#3a221e] transition sm:w-auto w-48" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                  PROJECTS
                </button>
              </Link>

              {/* Connect button → goes to /connect */}
              <Link href="/connect" passHref>
                <button className="border border-[#4b2e2e] text-[#4b2e2e] px-6 py-2 rounded-full hover:bg-[#f1eae4] transition sm:w-auto w-48" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                  CONNECT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
