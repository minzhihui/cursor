import { FiRadio, FiUsers } from 'react-icons/fi'
import type { LiveStream } from '../types'
import { formatNumber, formatRelativeTime } from '../utils/format'

type LiveRailProps = {
  liveStreams: LiveStream[]
}

const LiveRail = ({ liveStreams }: LiveRailProps) => {
  return (
    <div className="live-rail">
      {liveStreams.map((stream) => (
        <article key={stream.id} className="live-card">
          <div className="live-card__cover">
            <img src={stream.cover} alt={stream.title} loading="lazy" />
            <span className="live-card__badge">
              <FiRadio aria-hidden /> 直播中
            </span>
          </div>
          <div className="live-card__content">
            <h3 className="live-card__title">{stream.title}</h3>
            <div className="live-card__meta">
              <span>{stream.streamer}</span>
              <span>{stream.category}</span>
            </div>
            <div className="live-card__footer">
              <span className="live-card__viewers">
                <FiUsers aria-hidden /> {formatNumber(stream.viewers)}
              </span>
              <span className="live-card__time">{formatRelativeTime(stream.startedAt)}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default LiveRail
