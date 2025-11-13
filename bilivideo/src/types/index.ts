export type Banner = {
  id: string
  title: string
  description: string
  image: string
  gradient: string
  category: string
  link: string
}

export type VideoAuthor = {
  id: string
  name: string
  avatar: string
  level: number
  followers: number
  badge?: string
}

export type Video = {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: number
  danmaku: number
  likes: number
  category: string
  subCategory?: string
  tags: string[]
  publishedAt: string
  author: VideoAuthor
  videoUrl: string
  isLive?: boolean
}

export type LiveStream = {
  id: string
  title: string
  cover: string
  viewers: number
  streamer: string
  game?: string
  category: string
  startedAt: string
}

export type Article = {
  id: string
  title: string
  cover: string
  excerpt: string
  author: string
  publishedAt: string
  category: string
}

export type Category = {
  id: string
  label: string
  path: string
  children?: Category[]
}

export type Playlist = {
  id: string
  title: string
  cover: string
  videoCount: number
  followers: number
  description: string
}

export type DataContextValue = {
  banners: Banner[]
  categories: Category[]
  videos: Video[]
  liveStreams: LiveStream[]
  articles: Article[]
  playlists: Playlist[]
  trending: Video[]
  fresh: Video[]
  getVideoById: (id: string) => Video | undefined
  searchVideos: (query: string) => Video[]
  getVideosByCategory: (categoryId: string) => Video[]
}
