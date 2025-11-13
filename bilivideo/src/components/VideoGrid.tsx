import type { Video } from '../types'
import VideoCard from './VideoCard'

type VideoGridProps = {
  videos: Video[]
  variant?: 'default' | 'compact'
  limit?: number
  emptyText?: string
}

const VideoGrid = ({ videos, variant = 'default', limit, emptyText }: VideoGridProps) => {
  const list = typeof limit === 'number' ? videos.slice(0, limit) : videos

  if (!list.length) {
    return <div className="video-grid video-grid--empty">{emptyText ?? '暂无内容'}</div>
  }

  return (
    <div className={`video-grid video-grid--${variant}`}>
      {list.map((video) => (
        <VideoCard key={video.id} video={video} variant={variant} />
      ))}
    </div>
  )
}

export default VideoGrid
