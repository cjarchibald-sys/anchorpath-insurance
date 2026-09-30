import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import '@fontsource/source-serif-4/600.css'
import './styles.css'
import App from './App.jsx'

// Printed pages include the answers in collapsed FAQ and glossary entries (FR-14).
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('details:not([open])').forEach((d) => d.setAttribute('open', ''))
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
