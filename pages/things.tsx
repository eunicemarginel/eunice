import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PhotoTile from '@/components/PhotoTile'
import { photographyData } from '@/data/photographyData'
import { projectsData } from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'

const categories = ['All', 'Projects', 'Photography']

// Define proper types
interface ProjectItem {
  id: number
  type: 'Projects'
  title: string
  description: string
  image: string
  link: string
}

interface PhotoItem {
  id: number
  type: 'Photography'
  title: string
  model: string
  brand: string
  lens: string
  settings: string
  image: string
}

type Item = ProjectItem | PhotoItem

const items: Item[] = [
  ...photographyData,
  ...projectsData,
]

export default function Things() {
  const router = useRouter()
  const [active, setActive] = useState('All')

  useEffect(() => {
    const { filter } = router.query
    if (
      filter &&
      typeof filter === 'string' &&
      categories.includes(capitalize(filter))
    ) {
      setActive(capitalize(filter))
    }
  }, [router.query])

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

  const filteredItems =
    active === 'All' ? items : items.filter((item) => item.type === active)

  return (
    <main className="bg-[#fdfbf7] min-h-screen px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-serif text-[#4b2e2e] text-center mb-8">
        Things I Made, Saw & Thought About
      </h1>

      <div className="flex justify-center gap-2 flex-wrap mb-8" style={{ fontFamily: 'Source Code Pro, monospace' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-full border ${active === cat
              ? 'bg-[#4b2e2e] text-white'
              : 'border-[#4b2e2e] text-[#4b2e2e]'
              } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
        {filteredItems.map((item) => {
          if (item.type === 'Projects') {
            const project = item as ProjectItem
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            )
          } else {
            const photo = item as PhotoItem
            return (
              <PhotoTile
                key={photo.id}
                image={photo.image}
                model={photo.model}
                brand={photo.brand}
                lens={photo.lens}
                settings={photo.settings}
              />
            )
          }
        })}
      </section>
    </main>
  )
}
