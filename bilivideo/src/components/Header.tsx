import clsx from 'clsx'
import { useState } from 'react'
import { FiBell, FiSearch, FiTv, FiUpload, FiUser } from 'react-icons/fi'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useDataContext } from '../data/DataContext'

const Header = () => {
  const { categories, trending } = useDataContext()
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = keyword.trim()
    if (!trimmed) return
    navigate(`/search?q=${encodeURIComponent(trimmed)}`)
    setKeyword('')
  }

  const popularKeywords = trending.slice(0, 4).map((video) => video.title)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left">
          <Link to="/" className="site-header__logo" aria-label="BiliVideo 首页">
            <span className="logo-mark">β</span>
            <span className="logo-text">BiliVideo</span>
          </Link>

          <nav className="nav-primary" aria-label="主导航">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx('nav-primary__item', { 'is-active': isActive })
              }
            >
              首页
            </NavLink>
            {categories
              .filter((category) => category.id !== 'home')
              .map((category) => (
                <NavLink
                  key={category.id}
                  to={category.path}
                  className={({ isActive }) =>
                    clsx('nav-primary__item', { 'is-active': isActive })
                  }
                >
                  {category.label}
                </NavLink>
              ))}
          </nav>
        </div>

        <div className="site-header__right">
          <form className="search-bar" onSubmit={handleSubmit} role="search">
            <FiSearch className="search-bar__icon" aria-hidden />
            <input
              type="search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="search-bar__input"
              placeholder="搜索视频、番剧、up 主或标签"
              aria-label="站内搜索"
            />
            <button type="submit" className="search-bar__button">
              搜索
            </button>
          </form>

          <div className="site-header__actions">
            <Link to="/upload" className="site-header__action">
              <FiUpload aria-hidden />
              <span>投稿</span>
            </Link>
            <Link to="/live" className="site-header__action">
              <FiTv aria-hidden />
              <span>开直播</span>
            </Link>
            <button type="button" className="site-header__action" aria-label="消息通知">
              <FiBell aria-hidden />
            </button>
            <button type="button" className="site-header__profile" aria-label="个人中心">
              <FiUser aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div className="site-header__subline" aria-label="热搜榜">
        <span className="site-header__subline-label">热搜：</span>
        <div className="site-header__keywords">
          {popularKeywords.map((item, index) => (
            <button
              key={item}
              type="button"
              className="keyword-pill"
              onClick={() => navigate(`/search?q=${encodeURIComponent(item)}`)}
            >
              <span className="keyword-pill__index">{index + 1}</span>
              <span className="keyword-pill__text">{item}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
