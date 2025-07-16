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
    // Show TV static for half a second
    const timer = setTimeout(() => {
      setLoading(false)
    }, 350)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-brutal-black flex items-center justify-center">
        <img 
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb5482a9-1ec4-4f6a-a28a-84d267f89594/d3jmbjq-9d52e89c-e6eb-40ab-9517-8754ba9a3bcc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZiNTQ4MmE5LTFlYzQtNGY2YS1hMjhhLTg0ZDI2N2Y4OTU5NFwvZDNqbWJqcS05ZDUyZTg5Yy1lNmViLTQwYWItOTUxNy04NzU0YmE5YTNiY2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mg-Gz7pjrmku41ylRehaOJTtegctwYnAARUBMXfjm4k"
          alt="TV Static"
          className="w-full h-full object-cover"
        />
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