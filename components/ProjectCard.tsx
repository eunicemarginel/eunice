type ProjectCardProps = {
    title: string
    description: string
    image: string
    link: string
    tools: readonly string[]
}

export default function ProjectCard({ title, description, image, link, tools }: ProjectCardProps) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg border border-[#e8e2db] hover:shadow-lg transition">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded mb-3"
                />
            )}
            <h2 className="text-lg font-bold text-[#4b2e2e] mb-1 font-serif">{title}</h2>
            <p className="text-sm text-[#5e4632] mb-2">{description}</p>

            {/* Tools used */}
            <div className="flex flex-wrap gap-1 mb-2">
                {tools.map((tool, idx) => (
                    <span
                        key={idx}
                        className="bg-[#f1eae4] text-[#4b2e2e] text-xs px-2 py-1 rounded-full font-mono"
                    >
                        {tool}
                    </span>
                ))}
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a5548] text-sm underline"
            >
                View more
            </a>
        </div>
    )
}
