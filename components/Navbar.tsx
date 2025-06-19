import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="text-sm sm:text-base text-[#5e4632] font-medium w-full px-6 py-4 flex justify-between items-center bg-transparent fixed top-0 left-0 z-20">
      <Link href="/">
        <span
          className="font-light text-sm sm:text-base"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          kape!!
        </span>
      </Link>

      <div className="flex gap-4 sm:gap-6 items-center">
        <Link
          href="/blog"
          className="text-sm sm:text-base font-light hover:text-[#7a5548] transition-all duration-500 ease-in-out text-center"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          tots
        </Link>
        <Link
          href={{ pathname: '/things', query: { filter: 'projects' } }}
          className="text-sm sm:text-base font-light hover:text-[#7a5548] transition-all duration-500 ease-in-out text-center"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          things
        </Link>
        <a
          href="/eunice-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7a5548] transition"
        >
          📌
        </a>
      </div>
    </nav>
  )
}
