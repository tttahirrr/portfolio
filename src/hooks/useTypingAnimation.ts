import { useState, useEffect, useRef } from 'react'

interface UseTypingAnimationOptions {
  text: string
  speed?: number
  startDelay?: number
}

export const useTypingAnimation = ({ 
  text, 
  speed = 150, 
  startDelay = 0 
}: UseTypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            
            setTimeout(() => {
              setIsTyping(true)
              let index = 0
              
              const interval = setInterval(() => {
                if (index < text.length) {
                  setDisplayText(text.slice(0, index + 1))
                  index++
                } else {
                  setIsTyping(false)
                  setShowCursor(true)
                  clearInterval(interval)
                }
              }, speed)
              
              return () => clearInterval(interval)
            }, startDelay)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '-50px 0px' // Slight offset for better timing
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [text, speed, startDelay, hasStarted])

  return {
    displayText,
    isTyping,
    showCursor,
    elementRef
  }
} 