import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Basics from './pages/Basics'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import './index.css'

export default function App() {
  const [page, setPage] = useState('home')

  function navigateTo(p) {
    setPage(p)
    window.scrollTo(0, 0)
  }

  const pages = { home: Home, about: About, basics: Basics, plans: Plans, contact: Contact }
  const PageComponent = pages[page] || Home

  return (
    <>
      <Nav page={page} setPage={navigateTo} />
      <main>
        <PageComponent setPage={navigateTo} />
      </main>
      <Footer />
    </>
  )
}
