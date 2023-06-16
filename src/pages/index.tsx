import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <main className={`flex w-full max-h-screen flex-col justify-start`}>
      <Navbar />
      <div>
        <SideBar /> 
        content
        {/* <section></section>
        <article></article>
        <aside></aside>
        <footer></footer>
        <details></details>
        <summary></summary> */}
      </div>
    </main>
  )
}
