import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'

const SiteLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search])

  return (
    <div className="app-shell">
      <Header />
      <main className="app-shell__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
