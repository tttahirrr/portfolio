import { useTypingAnimation } from '../hooks/useTypingAnimation'

interface TypingTitleProps {
  text: string
  className?: string
  speed?: number
  startDelay?: number
}

const TypingTitle = ({ 
  text, 
  className = '', 
  speed = 100, 
  startDelay = 200 
}: TypingTitleProps) => {
  const { displayText, isTyping, showCursor, elementRef } = useTypingAnimation({
    text,
    speed,
    startDelay
  })

  return (
    <h2 
      ref={elementRef}
      className={`font-brutal text-brutal-lg mb-4 ${className}`}
    >
      <span className="text-brutal-red">{'>'}</span> {displayText}
      {isTyping && <span className="terminal-cursor ml-1"></span>}
      {showCursor && <span className="terminal-cursor ml-1"></span>}
    </h2>
  )
}

export default TypingTitle 