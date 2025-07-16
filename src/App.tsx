import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate terminal loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-brutal-black text-brutal-white flex items-center justify-center">
        <div className="text-center font-mono">
          <div className="text-2xl mb-4">INITIALIZING_SYSTEM...</div>
          <div className="text-lg">
            <span className="terminal-cursor">LOADING_PORTFOLIO</span>
          </div>
          <div className="mt-4 text-sm">
            [████████████████████] 100%
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brutal-black text-brutal-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 