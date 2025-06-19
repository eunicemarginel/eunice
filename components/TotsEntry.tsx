// components/TotsEntry.tsx

interface TotsEntryProps {
  title: string
  date: string
  mood: string
  snippet: string
  bg: string
}

export default function TotsEntry({ title, date, mood, snippet, bg }: TotsEntryProps) {
  return (
    <div
      className={`w-72 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform ${bg} rotate-[-1.5deg] hover:rotate-0`}
    >
      <p className="text-xs text-[#7a5548] mb-1">
        {date} {mood}
      </p>
      <h2 className="text-lg font-bold text-[#4b2e2e] mb-2 font-serif">
        {title}
      </h2>
      <p className="text-sm text-[#5e4632] leading-snug font-mono">
        {snippet}
      </p>
    </div>
  )
}
