import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import Section from '../components/Section'
import VideoGrid from '../components/VideoGrid'
import { useDataContext } from '../data/DataContext'

const ALL = '全部'

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const { categories, getVideosByCategory } = useDataContext()
  const category = categories.find((item) => item.id === categoryId)
  const videos = useMemo(
    () => (category ? getVideosByCategory(category.id) : []),
    [category, getVideosByCategory],
  )

  const tags = useMemo(() => {
    const result = new Set<string>()
    videos.forEach((video) => {
      if (video.subCategory) {
        result.add(video.subCategory)
      }
      video.tags.forEach((tag) => result.add(tag))
    })
    return [ALL, ...Array.from(result)]
  }, [videos])

  const [activeTag, setActiveTag] = useState<string>(ALL)

  useEffect(() => {
    setActiveTag(ALL)
  }, [categoryId])

  const filteredVideos = useMemo(() => {
    if (activeTag === ALL) {
      return videos
    }
    return videos.filter(
      (video) => video.subCategory === activeTag || video.tags.includes(activeTag),
    )
  }, [activeTag, videos])

  if (!category) {
    return (
      <div className="page page--category">
        <div className="empty-state">
          <h2>未找到对应的内容</h2>
          <p>您访问的分区暂未收录，欢迎返回首页探索更多精彩内容。</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page page--category">
      <header className="category-hero">
        <div className="category-hero__content">
          <h1>{category.label}</h1>
          <p>
            精选 {category.label} 分区的优质内容，结合热度与口碑，为你呈现最值得观看的精彩视频。
          </p>
        </div>
      </header>

      <Section title={`${category.label} 分区`} subtitle="按标签快速筛选你感兴趣的内容">
        <div className="category-filter">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={clsx('category-filter__tag', { 'is-active': tag === activeTag })}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <VideoGrid
          videos={filteredVideos}
          emptyText="该标签暂无内容，尝试选择其他标签吧～"
        />
      </Section>
    </div>
  )
}

export default CategoryPage
