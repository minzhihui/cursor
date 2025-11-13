import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <span className="logo-mark">β</span>
            <span className="logo-text">BiliVideo</span>
          </div>
          <p className="site-footer__description">
            一个陪你探索次元与现实的多元视频社区，灵感与创意在这里相遇。
          </p>
        </div>

        <div className="site-footer__links">
          <div>
            <h4>服务与支持</h4>
            <ul>
              <li>
                <Link to="/about">关于我们</Link>
              </li>
              <li>
                <Link to="/cooperation">商业合作</Link>
              </li>
              <li>
                <Link to="/help">帮助中心</Link>
              </li>
              <li>
                <Link to="/feedback">意见反馈</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>创作与版权</h4>
            <ul>
              <li>
                <Link to="/creator">创作者学院</Link>
              </li>
              <li>
                <Link to="/copyright">版权中心</Link>
              </li>
              <li>
                <Link to="/community">社区公约</Link>
              </li>
              <li>
                <Link to="/privacy">隐私政策</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>客户端下载</h4>
            <ul>
              <li>
                <Link to="/apps">移动端</Link>
              </li>
              <li>
                <Link to="/tv">TV 端</Link>
              </li>
              <li>
                <Link to="/kids">少儿版</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer__meta">
        <p>© 2025 BiliVideo. 参考哔哩哔哩设计，以学习与演示为目的。</p>
        <p>
          本站提供演示数据与示例视频链接，仅供展示界面效果，请勿用于商业用途。
        </p>
      </div>
    </footer>
  )
}

export default Footer
