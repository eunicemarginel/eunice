// pages/connect.tsx (or Connect section if using single-page layout)

import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa'

export default function Connect() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-serif text-[#4b2e2e] mb-2">Let&apos;s Connect</h1>
      <p className="text-[#5e4632] mb-10 text-sm">You can find me coding, designing, or just vibing here ↓</p>

      <div className="flex justify-center gap-6 text-2xl text-[#4b2e2e]">
        <a
          href="https://www.linkedin.com/in/eunice-marginel-valderama-a46a5a187/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#f1eae4] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/eunicemarginel"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#f1eae4] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/eemrgnl?igsh=eXF4cjk3dXJmYWc0&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#f1eae4] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://discord.gg/FnrVywRd"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#f1eae4] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <FaDiscord />
        </a>
        <a href="https://x.com/eunicemarginel?s=21&t=zFbTKHxCuPaodr0faO5pqA"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#f1eae4] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <FaTwitter />
        </a>
      </div>
    </main>
  )
}
