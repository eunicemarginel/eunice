import Link from 'next/link'

type ProjectCardProps = {
    title: string
    description: string
    image: string
    link: string
}

export default function ProjectCard({
    title,
    description,
    image,
    link,
}: ProjectCardProps) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="bg-white border border-[#e8e2db] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}
                <div className="p-4">
                    <h2 className="text-lg font-serif font-semibold text-[#4b2e2e] mb-2">
                        {title}
                    </h2>
                    <p className="text-sm text-[#5e4632] font-mono mb-4">{description}</p>
                    <span className="inline-block px-3 py-1 border border-[#4b2e2e] text-[#4b2e2e] rounded-full text-xs font-medium hover:bg-[#f1eae4] transition">
                        View project →
                    </span>
                </div>
            </div>
        </Link>
    )
}
