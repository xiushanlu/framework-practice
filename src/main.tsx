import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.tsx'
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
    <About />
  </StrictMode>,
)
