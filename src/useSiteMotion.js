import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Hard-step easing keeps every reveal feeling like a terminal repaint,
// not a smooth marketing fade.
const STEP = 'steps(4)'
const PRINT = 'steps(3)'

function inView(trigger) {
  return {
    trigger,
    start: 'top 88%',
    once: true,
  }
}

function bootHero() {
  const tl = gsap.timeline({ defaults: { ease: STEP } })

  tl.from('.hero__brand', { autoAlpha: 0, y: 6, duration: 0.24 })
    .from('.promptline', { autoAlpha: 0, duration: 0.15 }, '-=0.06')
    .fromTo(
      '.promptline__cmd',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'steps(18)' },
      '<',
    )
    .from('.promptline .cursor', { autoAlpha: 0, duration: 0.01 }, '>-0.02')
    .from(
      '.hero__line',
      {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.45,
        ease: 'steps(14)',
        stagger: 0.12,
      },
      '-=0.12',
    )
    .from('.lede', { autoAlpha: 0, y: 6, duration: 0.22 }, '-=0.18')
    .from('.hero .installbar', { autoAlpha: 0, y: 4, duration: 0.2 }, '-=0.06')
    .from('.hero .note-line', { autoAlpha: 0, duration: 0.14 }, '-=0.04')
    .from(
      '.hero__actions > *',
      { autoAlpha: 0, y: 3, duration: 0.18, stagger: 0.05 },
      '-=0.04',
    )
    .from(
      '.hero__meta > span',
      { autoAlpha: 0, duration: 0.14, stagger: 0.04 },
      '-=0.02',
    )
    .from(
      '.hero__demo',
      { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', duration: 0.38, ease: 'steps(8)' },
      '-=0.22',
    )
}

function revealSections() {
  gsap.utils.toArray('.sec-head').forEach((head) => {
    gsap.from(
      head.querySelectorAll('.sec-head__label, .sec-head__title, .sec-head__lede'),
      {
        autoAlpha: 0,
        y: 8,
        duration: 0.28,
        ease: STEP,
        stagger: 0.06,
        scrollTrigger: inView(head),
      },
    )
  })

  gsap.from('.principle', {
    autoAlpha: 0,
    y: 8,
    duration: 0.24,
    ease: STEP,
    stagger: 0.07,
    scrollTrigger: inView('.principles'),
  })

  gsap.utils.toArray('.feature').forEach((feature) => {
    gsap.from(
      feature.querySelectorAll(
        '.feature__label, .feature__title, .feature__body, .feature__list, .feature__mock',
      ),
      {
        autoAlpha: 0,
        y: 8,
        duration: 0.26,
        ease: STEP,
        stagger: 0.05,
        scrollTrigger: inView(feature),
      },
    )
  })

  gsap.from('.cmd-search', {
    autoAlpha: 0,
    y: 6,
    duration: 0.22,
    ease: STEP,
    scrollTrigger: inView('.cmd-search'),
  })

  gsap.from('.cmd-count', {
    autoAlpha: 0,
    duration: 0.18,
    ease: STEP,
    scrollTrigger: inView('.cmd-count'),
  })

  gsap.from('.cmd-table', {
    autoAlpha: 0,
    y: 8,
    duration: 0.3,
    ease: STEP,
    scrollTrigger: inView('.cmd-table'),
  })

  gsap.from('.faq__item', {
    autoAlpha: 0,
    y: 5,
    duration: 0.2,
    ease: STEP,
    stagger: 0.045,
    scrollTrigger: inView('.faq'),
  })

  gsap.from('.footer__top > *', {
    autoAlpha: 0,
    y: 6,
    duration: 0.24,
    ease: STEP,
    stagger: 0.06,
    scrollTrigger: inView('.footer'),
  })
}

function printPanels() {
  const status = document.querySelector('.term--status')
  if (status) {
    const tl = gsap.timeline({ scrollTrigger: inView(status) })
    tl.from(status, {
      autoAlpha: 0,
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.34,
      ease: 'steps(8)',
    })
      .from(
        status.querySelectorAll('.status-item'),
        { autoAlpha: 0, y: 4, duration: 0.16, ease: PRINT, stagger: 0.06 },
        '-=0.12',
      )
      .from(status.querySelector('.status-note'), {
        autoAlpha: 0,
        duration: 0.14,
        ease: STEP,
      }, '-=0.02')
  }

  gsap.from('.install__left > *', {
    autoAlpha: 0,
    y: 6,
    duration: 0.22,
    ease: STEP,
    stagger: 0.05,
    scrollTrigger: inView('.install__left'),
  })

  const preview = document.querySelector('.term--install')
  if (preview) {
    const tl = gsap.timeline({ scrollTrigger: inView(preview) })
    tl.from(preview, {
      autoAlpha: 0,
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.32,
      ease: 'steps(8)',
    }).from(
      preview.querySelectorAll('.preview__line'),
      { autoAlpha: 0, y: 3, duration: 0.15, ease: PRINT, stagger: 0.06 },
      '-=0.1',
    )
  }
}

export function useSiteMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let alive = true
    const ctx = gsap.context(() => {
      bootHero()
      revealSections()
      printPanels()
    })

    const refresh = () => {
      if (alive) ScrollTrigger.refresh()
    }
    window.addEventListener('load', refresh)
    document.fonts?.ready?.then(refresh)

    return () => {
      alive = false
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [])
}
