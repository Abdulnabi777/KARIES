import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer, ScrollToTop } from './components/Layout'
import Home from './pages/Home'
import Education from './pages/Education'
import Sports from './pages/Sports'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
