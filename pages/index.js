import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components'
import Background from '@/components/particles/bg'
import Hero from '@/components/hero'
import About from '@/components/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Background/>
    </main>
  )
}
