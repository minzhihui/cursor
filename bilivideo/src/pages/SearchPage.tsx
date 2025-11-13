import { useEffect, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

import Section from '../components/Section'
import VideoGrid from '../components/VideoGrid'
import { useDataContext } from '../data/DataContext'

const SearchPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { searchVideos, trending } = useDataContext()

  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const initialKeyword = params.get('q') ?? ''
  const [keyword, setKeyword] = useState(initialKeyword)

  useEffect(() => {
    setKeyword(initialKeyword)
  }, [initialKeyword])

  const results = useMemo(
    () => (initialKeyword ? searchVideos(initialKeyword) : []),
    [initialKeyword, searchVideos],
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = keyword.trim()
    navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search')
  }

  return (
    <div className="page page--search">
      <header className="search-hero">
        <form className="search-hero__form" onSubmit={handleSubmit}>
          <FiSearch aria-hidden />
          <input
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="输入关键词搜索视频、番剧或 up 主"
          />
          <button type="submit">搜索</button>
        </form>
      </header>

      {initialKeyword ? (
        <Section
          title={`“${initialKeyword}” 的搜索结果`}
          subtitle={`共找到 ${results.length} 条相关内容`}
        >
          <VideoGrid
            videos={results}
            emptyText="没有找到相关内容，试试其他关键词或查看下方推荐。"
          />
        </Section>
      ) : (
        <Section title="热门搜索">
          <div className="search-suggestions">
            {trending.slice(0, 8).map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => navigate(`/search?q=${encodeURIComponent(video.title)}`)}
              >
                {video.title}
              </button>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

export default SearchPage
