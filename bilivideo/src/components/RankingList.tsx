import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Video } from '../types'
import { formatNumber } from '../utils/format'

type RankingListProps = {
  videos: Video[]
  limit?: number
}

const RankingList = ({ videos, limit = 10 }: RankingListProps) => {
  const list = videos.slice(0, limit)

  return (
    <ol className="ranking-list">
      {list.map((video, index) => (
        <li key={video.id} className="ranking-list__item">
          <span className={`ranking-list__index ranking-list__index--${index + 1}`}>
            {index + 1}
          </span>
          <div className="ranking-list__content">
            <Link to={`/video/${video.id}`} className="ranking-list__title">
              {video.title}
            </Link>
            <div className="ranking-list__meta">
              <span>{video.author.name}</span>
              <span>
                <FiEye aria-hidden /> {formatNumber(video.views)}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default RankingList
