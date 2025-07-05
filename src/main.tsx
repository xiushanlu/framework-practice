import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Hero.tsx'
import About from './About.tsx'
import Project from './Project.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
    <About />
    <Project />
  </StrictMode>,
)
