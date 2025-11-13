import { useMemo } from 'react'
import { FiRadio, FiStar, FiTrendingUp, FiVideo } from 'react-icons/fi'

import ArticleList from '../components/ArticleList'
import HeroCarousel from '../components/HeroCarousel'
import LiveRail from '../components/LiveRail'
import PlaylistRail from '../components/PlaylistRail'
import RankingList from '../components/RankingList'
import Section from '../components/Section'
import VideoGrid from '../components/VideoGrid'
import { useDataContext } from '../data/DataContext'

const HomePage = () => {
  const { banners, videos, trending, liveStreams, articles, playlists, fresh } =
    useDataContext()

  const animeHighlights = useMemo(
    () => videos.filter((video) => video.category === 'anime').slice(0, 6),
    [videos],
  )

  const knowledgeHighlights = useMemo(
    () => videos.filter((video) => video.category === 'knowledge').slice(0, 6),
    [videos],
  )

  return (
    <div className="page page--home">
      <HeroCarousel banners={banners} />

      <div className="page__layout">
        <div className="page__main">
          <Section
            title="每日精选"
            subtitle="结合热度与口碑，为你筛选今日值得一看的优质内容"
            icon={<FiStar aria-hidden />}
            action={<a href="#fresh" className="link-more">查看更多</a>}
            anchor="fresh"
          >
            <VideoGrid videos={fresh} limit={6} />
          </Section>

          <Section
            title="热度飙升"
            subtitle="全站热度榜单实时更新，看看大家都在追什么"
            icon={<FiTrendingUp aria-hidden />}
          >
            <VideoGrid videos={trending} limit={6} variant="compact" />
          </Section>

          <Section
            title="番剧速递"
            subtitle="最新番剧资讯与导视推荐，开启你的追番计划"
            icon={<FiVideo aria-hidden />}
          >
            <VideoGrid videos={animeHighlights} variant="compact" />
          </Section>

          <Section
            title="硬核知识站"
            subtitle="前沿科技与科普主题精选，涨知识的同时也能收获快乐"
            icon={<FiVideo aria-hidden />}
          >
            <VideoGrid videos={knowledgeHighlights} variant="compact" />
          </Section>

          <Section
            title="直播热场"
            subtitle="多元直播间同步在线，参与互动不缺席"
            icon={<FiRadio aria-hidden />}
            action={<a className="link-more" href="/live">直播广场</a>}
          >
            <LiveRail liveStreams={liveStreams} />
          </Section>

          <Section
            title="专题播放列表"
            subtitle="跟随策划好的主题，一次看个够"
            icon={<FiStar aria-hidden />}
          >
            <PlaylistRail playlists={playlists} />
          </Section>

          <Section
            title="热门专栏"
            subtitle="看创作者的深度观察与灵感记录"
          >
            <ArticleList articles={articles} />
          </Section>
        </div>

        <aside className="page__sidebar">
          <div className="sidebar-card">
            <h3>全站热度榜</h3>
            <RankingList videos={trending} limit={10} />
          </div>

          <div className="sidebar-card sidebar-card--tips">
            <h3>创作指南</h3>
            <ul>
              <li>投稿前请确认素材拥有使用权，尊重原创与版权。</li>
              <li>善用封面、标题与分 P，为观众准备更清晰的观看体验。</li>
              <li>多参与评论区互动，建立属于你的核心粉丝圈。</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default HomePage
