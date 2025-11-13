import { useMemo } from 'react'
import {
  FiEye,
  FiFolderPlus,
  FiMessageCircle,
  FiShare2,
  FiThumbsUp,
  FiUserPlus,
} from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'

import Section from '../components/Section'
import VideoGrid from '../components/VideoGrid'
import { useDataContext } from '../data/DataContext'
import { formatDate, formatNumber } from '../utils/format'

const VideoDetailPage = () => {
  const { videoId } = useParams<{ videoId: string }>()
  const { getVideoById, videos } = useDataContext()
  const video = videoId ? getVideoById(videoId) : undefined

  const recommendations = useMemo(() => {
    if (!video) return []
    return videos
      .filter((item) => item.id !== video.id && item.category === video.category)
      .slice(0, 6)
  }, [video, videos])

  if (!video) {
    return (
      <div className="page page--video">
        <div className="empty-state">
          <h2>视频不存在或已被删除</h2>
          <p>返回首页探索更多精彩视频吧。</p>
          <Link to="/" className="button-primary">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page page--video">
      <div className="video-layout">
        <div className="video-layout__player">
          <video
            className="video-player"
            src={video.videoUrl}
            poster={video.thumbnail}
            controls
            controlsList="nodownload"
          >
            您的浏览器暂不支持视频播放，请升级浏览器。
          </video>

          <div className="video-info">
            <h1 className="video-info__title">{video.title}</h1>
            <div className="video-info__meta">
              <span>
                <FiEye aria-hidden /> {formatNumber(video.views)} 播放
              </span>
              <span>
                <FiMessageCircle aria-hidden /> {formatNumber(video.danmaku)} 弹幕
              </span>
              <span>发布于 {formatDate(video.publishedAt)}</span>
            </div>
            <div className="video-info__actions">
              <button type="button" className="button-primary">
                <FiThumbsUp aria-hidden /> 点赞
              </button>
              <button type="button" className="button-outline">
                <FiFolderPlus aria-hidden /> 收藏
              </button>
              <button type="button" className="button-outline">
                <FiShare2 aria-hidden /> 分享
              </button>
            </div>

            <div className="video-info__tags">
              {video.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>

            <p className="video-info__description">{video.description}</p>
          </div>

          <div className="video-author">
            <div className="video-author__profile">
              <img src={video.author.avatar} alt={video.author.name} />
              <div>
                <h2>{video.author.name}</h2>
                <p>
                  Lv.{video.author.level} · {formatNumber(video.author.followers)} 粉丝
                </p>
                {video.author.badge && <span className="badge">{video.author.badge}</span>}
              </div>
            </div>
            <button type="button" className="button-outline">
              <FiUserPlus aria-hidden /> 关注
            </button>
          </div>
        </div>

        <aside className="video-layout__sidebar">
          <Section title="相关推荐">
            <VideoGrid videos={recommendations} variant="compact" emptyText="暂无推荐" />
          </Section>
        </aside>
      </div>
    </div>
  )
}

export default VideoDetailPage
