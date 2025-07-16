import { useState } from 'react'

const Header = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: '[01] HOME', href: '#home' },
    { id: 'about', label: '[02] ABOUT', href: '#about' },
    { id: 'skills', label: '[03] SKILLS', href: '#skills' },
    { id: 'projects', label: '[04] PROJECTS', href: '#projects' },
    { id: 'contact', label: '[05] CONTACT', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brutal-black brutal-border-b-4">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-mono text-lg font-bold">
            <span className="text-brutal-red">{'>'}</span> TAHIR_TUZUN.exe
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-mono text-sm hover:text-brutal-red transition-none ${
                  activeSection === item.id ? 'text-brutal-red' : 'text-brutal-white'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden font-mono text-lg">
            [MENU]
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 