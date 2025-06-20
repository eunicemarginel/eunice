import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollTopButton() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!showScrollTop) return null

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-[#4b2e2e] text-white p-3 rounded-full shadow-md hover:bg-[#7a5548] transition-all duration-300"
            aria-label="Scroll to top"
        >
            <ChevronUp size={20} />
        </button>
    )
}
