import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Navbar />
      <section></section>
      <article></article>
      <aside></aside>
      <footer></footer>
      <details></details>
      <summary></summary>
    </main>
  )
}
