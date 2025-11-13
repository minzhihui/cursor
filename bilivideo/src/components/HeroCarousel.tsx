import { useEffect, useMemo, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Banner } from '../types'

type HeroCarouselProps = {
  banners: Banner[]
}

const ROTATE_INTERVAL = 6000

const HeroCarousel = ({ banners }: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const items = useMemo(() => banners.slice(0, 5), [banners])

  useEffect(() => {
    if (items.length <= 1) return
    const timeout = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, ROTATE_INTERVAL)

    return () => {
      window.clearInterval(timeout)
    }
  }, [items.length])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  return (
    <div className="hero-carousel">
      <div className="hero-carousel__viewport">
        {items.map((banner, index) => (
          <article
            key={banner.id}
            className={`hero-carousel__slide ${index === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div
              className="hero-carousel__overlay"
              style={{ backgroundImage: banner.gradient }}
            />
            <div className="hero-carousel__content">
              <span className="hero-carousel__category">{banner.category}</span>
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
              <Link to={banner.link} className="hero-carousel__cta">
                立即查看
              </Link>
            </div>
          </article>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            className="hero-carousel__control hero-carousel__control--prev"
            onClick={handlePrev}
            aria-label="上一张"
          >
            <FiChevronLeft aria-hidden />
          </button>
          <button
            type="button"
            className="hero-carousel__control hero-carousel__control--next"
            onClick={handleNext}
            aria-label="下一张"
          >
            <FiChevronRight aria-hidden />
          </button>

          <div className="hero-carousel__indicators" role="tablist">
            {items.map((banner, index) => (
              <button
                key={banner.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={`hero-carousel__indicator ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">{banner.title}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default HeroCarousel
