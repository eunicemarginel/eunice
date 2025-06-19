import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import TotsEntry from '@/components/TotsEntry'
import { totsEntries } from '@/data/totsEntries'

export default function Blog() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const entries = totsEntries

  return (
    <>
      <Head>
        <title>eunice`&apos;`s thoughts</title>
      </Head>

      <main className="min-h-screen bg-[#fdfbf7] px-4 py-12">
        <h1
          className="text-3xl sm:text-4xl font-serif text-[#4b2e2e] text-center sticky top-10 z-10 px-4 py-3"
        >
          my unfiltered brain dump
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {entries.map((entry) => (
            <TotsEntry
              key={entry.id}
              title={entry.title}
              date={entry.date}
              mood={entry.mood}
              snippet={entry.snippet}
              bg={entry.bg}
            />
          ))}
        </div>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-[#4b2e2e] text-white p-3 rounded-full shadow-md hover:bg-[#7a5548] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </main>
    </>
  )
}
