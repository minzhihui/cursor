import { createContext, useContext, useMemo, type ReactNode } from 'react'

import type { DataContextValue, Video } from '../types'
import {
  articles,
  banners,
  categories,
  fresh,
  getVideosByCategory as getVideosByCategoryFn,
  liveStreams,
  playlists,
  trending,
  videos,
} from './mockData'

const DataContext = createContext<DataContextValue | null>(null)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const value = useMemo<DataContextValue>(() => {
    const getVideoById = (id: string): Video | undefined =>
      videos.find((video) => video.id === id)

    const searchVideos = (query: string): Video[] => {
      if (!query.trim()) return []
      const lower = query.trim().toLowerCase()
      return videos.filter((video) => {
        return (
          video.title.toLowerCase().includes(lower) ||
          video.tags.some((tag) => tag.toLowerCase().includes(lower)) ||
          video.description.toLowerCase().includes(lower) ||
          video.author.name.toLowerCase().includes(lower)
        )
      })
    }

    const getVideosByCategory = (categoryId: string): Video[] =>
      getVideosByCategoryFn(categoryId)

    return {
      banners,
      categories,
      videos,
      liveStreams,
      articles,
      playlists,
      trending,
      fresh,
      getVideoById,
      searchVideos,
      getVideosByCategory,
    }
  }, [])

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}
