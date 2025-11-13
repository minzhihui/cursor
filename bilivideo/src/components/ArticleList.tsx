import type { Article } from '../types'
import { formatDate } from '../utils/format'

type ArticleListProps = {
  articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <div className="article-card__cover">
            <img src={article.cover} alt={article.title} loading="lazy" />
          </div>
          <div className="article-card__content">
            <span className="article-card__category">{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <div className="article-card__meta">
              <span>{article.author}</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ArticleList
