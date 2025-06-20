import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PhotoTile from '@/components/PhotoTile'
import { photographyData } from '@/data/photographyData'
import { projectsData } from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import ScrollTopButton from '@/components/ScrollTopButton'

const categories = ['All', 'Projects', 'Photography']

const items = [
  ...photographyData,
  ...projectsData
]


export default function Things() {
  const router = useRouter()
  const [active, setActive] = useState('All')

  useEffect(() => {
    const filter = typeof router.query.filter === 'string' ? router.query.filter : null
    const capitalized = filter ? capitalize(filter) : null

    if (capitalized && categories.includes(capitalized)) {
      setActive(capitalized)
    }
  }, [router.query.filter])


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
            return (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={'description' in item ? item.description : ''}
                image={item.image}
                link={'link' in item ? item.link : ''}
                tools={'tools' in item ? item.tools : []}
              />
            )
          }

          // fallback for photography
          return (
            <PhotoTile
              key={item.id}
              image={item.image}
              model={'model' in item ? item.model : ''}
              brand={'brand' in item ? item.brand : ''}
              lens={'lens' in item ? item.lens : ''}
              settings={'settings' in item ? item.settings : ''}
            />
          )
        })}
      </section>
      <ScrollTopButton />
    </main>
  )
}
