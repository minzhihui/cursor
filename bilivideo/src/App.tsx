import { Route, Routes } from 'react-router-dom'

import SiteLayout from './layouts/SiteLayout'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SearchPage from './pages/SearchPage'
import VideoDetailPage from './pages/VideoDetailPage'

const App = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="video/:videoId" element={<VideoDetailPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
