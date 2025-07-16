import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [subtitleText, setSubtitleText] = useState('')
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false)
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false)
  
  const fullText = 'TAHIR_TUZUN'
  const subtitleFullText = 'SOFTWARE_ENGINEER.init()'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
        
        // Start subtitle typing after main title finishes
        setTimeout(() => {
          setIsSubtitleTyping(true)
          let subtitleIndex = 0
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < subtitleFullText.length) {
              setSubtitleText(subtitleFullText.slice(0, subtitleIndex + 1))
              subtitleIndex++
            } else {
              setIsSubtitleTyping(false)
              setShowSubtitleCursor(true)
              clearInterval(subtitleInterval)
            }
          }, 100) // Slightly faster for subtitle
        }, 300) // Brief pause before subtitle starts
      }
    }, 150)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="font-brutal text-brutal-xl mb-4">
            <span className="glitch-text" data-text={currentText}>
              {currentText}
            </span>
            {isTyping && <span className="terminal-cursor"></span>}
          </h1>
          <div className="font-mono text-xl mb-2 text-brutal-red">
            {'>'} {subtitleText}
            {isSubtitleTyping && <span className="terminal-cursor ml-1"></span>}
            {showSubtitleCursor && <span className="terminal-cursor ml-1"></span>}
          </div>
        </div>

        {/* System Info */}
        <div className="bg-brutal-gray brutal-border p-6 max-w-2xl mx-auto mb-8 text-left">
          <div className="font-mono">
            <div className="text-brutal-green mb-2">SYSTEM_INFO:</div>
            <div className="pl-4 space-y-1">
              <div>{'>'} STATUS: AVAILABLE</div>
              <div>{'>'} EDUCATION: STONY_BROOK_UNIVERSITY</div>
              <div>{'>'} DEGREE: B.S.COMPUTER_SCIENCE</div>
              <div>{'>'} LOCATION: NEW_YORK</div>
              <div>{'>'} MISSION: "BUILD_BETTER_SOFTWARE"</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="brutal-btn font-mono uppercase"
          >
            [VIEW_PROJECTS]
          </a>
          <a 
            href="#contact" 
            className="brutal-btn-outline font-mono uppercase"
          >
            [CONTACT_ME]
          </a>
          <a 
            href="/resume.pdf" 
            download="Tahir_Tuzun_Resume.pdf"
            className="brutal-btn-outline font-mono uppercase"
          >
            [DOWNLOAD_RESUME]
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="font-mono text-sm animate-bounce">
            SCROLL_DOWN ↓
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 