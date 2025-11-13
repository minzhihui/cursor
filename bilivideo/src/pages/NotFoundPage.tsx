import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="page page--not-found">
      <div className="empty-state">
        <h1>哎呀，这里什么都没有</h1>
        <p>可能是链接过期或输入有误，返回首页继续探索吧～</p>
        <Link to="/" className="button-primary">
          返回首页
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
