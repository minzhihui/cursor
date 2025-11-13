import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  subtitle?: string
  icon?: ReactNode
  action?: ReactNode
  children: ReactNode
  anchor?: string
}

const Section = ({ title, subtitle, icon, action, children, anchor }: SectionProps) => {
  return (
    <section className="section" id={anchor}>
      <header className="section__header">
        <div className="section__title-group">
          {icon && <span className="section__icon">{icon}</span>}
          <div>
            <h2 className="section__title">{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        </div>
        {action && <div className="section__action">{action}</div>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
