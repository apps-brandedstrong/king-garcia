import { useEffect, useRef } from 'react'

export default function BlurH1({ children, className = '' }) {
  const ref = useRef(null)

  const text = typeof children === 'string' ? children : String(children ?? '')
  const words = text.split(' ').filter(Boolean)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('h1-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <h1 ref={ref} className={`blur-h1 ${className}`.trim()}>
      {words.map((word, i) => (
        <span
          key={i}
          className="bw"
          style={{ '--wi': i }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h1>
  )
}
