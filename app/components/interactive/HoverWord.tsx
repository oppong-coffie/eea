'use client'

interface HoverWordProps {
  text: string
  className?: string
}

export default function HoverWord({ text, className = "" }: HoverWordProps) {
  const words = text.split(" ")
  const colors = [
    "hover:text-[#FF8C42]", // brand secondary
    "hover:text-[#00A8A8]", // brand accent
    "hover:text-[#0F4C81]", // brand primary
  ]

  return (
    <span className={className}>
      {words.map((word, index) => {
        // Assign a hover color class based on the word index
        const hoverColor = colors[index % colors.length]
        
        return (
          <span
            key={index}
            className={`inline-block transition-colors duration-200 cursor-default select-none ${hoverColor}`}
            style={{
              marginRight: index === words.length - 1 ? 0 : '0.25em'
            }}
          >
            {word}
          </span>
        )
      })}
    </span>
  )
}
