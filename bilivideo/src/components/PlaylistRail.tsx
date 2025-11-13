import type { Playlist } from '../types'
import { formatNumber } from '../utils/format'

type PlaylistRailProps = {
  playlists: Playlist[]
}

const PlaylistRail = ({ playlists }: PlaylistRailProps) => {
  return (
    <div className="playlist-rail">
      {playlists.map((playlist) => (
        <article key={playlist.id} className="playlist-card">
          <div className="playlist-card__cover">
            <img src={playlist.cover} alt={playlist.title} loading="lazy" />
            <span className="playlist-card__count">{playlist.videoCount} 集</span>
          </div>
          <div className="playlist-card__content">
            <h3 className="playlist-card__title">{playlist.title}</h3>
            <p className="playlist-card__description">{playlist.description}</p>
            <span className="playlist-card__followers">
              {formatNumber(playlist.followers)} 人订阅
            </span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PlaylistRail
