import { FiEye, FiMessageCircle, FiThumbsUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Video } from '../types'
import { formatNumber, formatRelativeTime } from '../utils/format'

type VideoCardProps = {
  video: Video
  variant?: 'default' | 'compact'
}

const VideoCard = ({ video, variant = 'default' }: VideoCardProps) => {
  return (
    <Link to={`/video/${video.id}`} className={`video-card video-card--${variant}`}>
      <div className="video-card__thumb">
        <img src={video.thumbnail} alt={video.title} loading="lazy" />
        <span className="video-card__duration">{video.duration}</span>
        <div className="video-card__stats">
          <span>
            <FiEye aria-hidden /> {formatNumber(video.views)}
          </span>
          <span>
            <FiMessageCircle aria-hidden /> {formatNumber(video.danmaku)}
          </span>
        </div>
      </div>

      <div className="video-card__content">
        <h3 className="video-card__title">{video.title}</h3>
        <div className="video-card__meta">
          <span className="video-card__author">{video.author.name}</span>
          <span className="video-card__time">{formatRelativeTime(video.publishedAt)}</span>
        </div>
        {variant === 'default' && (
          <p className="video-card__description">{video.description}</p>
        )}

        <div className="video-card__footer">
          <div className="video-card__tags">
            {video.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="video-card__tag">
                #{tag}
              </span>
            ))}
          </div>
          <span className="video-card__likes">
            <FiThumbsUp aria-hidden /> {formatNumber(video.likes)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
