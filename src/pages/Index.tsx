import { GrainOverlay } from "@/components/grain-overlay"
import { WorkSection } from "@/components/sections/work-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const touchStartTime = useRef(0)
  const isSwiping = useRef(false)
  const scrollThrottleRef = useRef<number>()

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
      touchStartTime.current = Date.now()
      isSwiping.current = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = e.touches[0].clientX - touchStartX.current
      const deltaY = e.touches[0].clientY - touchStartY.current

      if (!isSwiping.current && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) {
        isSwiping.current = true
      }

      if (isSwiping.current) {
        e.preventDefault()
        if (scrollContainerRef.current) {
          const sectionWidth = scrollContainerRef.current.offsetWidth
          const base = sectionWidth * currentSection
          const resistance = 0.35
          scrollContainerRef.current.scrollLeft = base - deltaX * resistance
        }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const elapsed = Date.now() - touchStartTime.current
      const velocity = Math.abs(deltaX) / elapsed

      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY)
      const isQuickFlick = velocity > 0.3 && Math.abs(deltaX) > 20
      const isLongSwipe = Math.abs(deltaX) > 60

      if (isHorizontal && (isQuickFlick || isLongSwipe)) {
        if (deltaX > 0 && currentSection < 4) {
          scrollToSection(currentSection + 1)
        } else if (deltaX < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        } else {
          scrollToSection(currentSection)
        }
      } else {
        scrollToSection(currentSection)
      }

      isSwiping.current = false
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null
    let accumulated = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      accumulated += e.deltaY

      if (wheelTimeout) clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        if (accumulated > 30 && currentSection < 4) {
          scrollToSection(currentSection + 1)
        } else if (accumulated < -30 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
        accumulated = 0
      }, 50)
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
      if (wheelTimeout) clearTimeout(wheelTimeout)
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 4) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      {/* Blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-96 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-teal-200/35 blur-3xl" />
        <div className="absolute bottom-1/3 right-10 h-60 w-96 rounded-full bg-cyan-200/25 blur-3xl" />
      </div>
      <GrainOverlay />



      <nav
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6"
      >
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25 md:h-10 md:w-10">
            <span className="font-sans text-base font-bold text-foreground md:text-xl">AI</span>
          </div>
          <span className="font-sans text-base font-semibold tracking-tight text-foreground md:text-xl">ИИ & Общество</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {["Главная", "Применение", "Влияние", "О проекте", "Контакты"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-sm font-medium transition-colors ${
                currentSection === index ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton variant="secondary" onClick={() => scrollToSection(4)}>
            Контакты
          </MagneticButton>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSection === i ? "w-5 bg-foreground" : "w-1.5 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </nav>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className="relative z-10 flex h-screen overflow-x-auto overflow-y-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hero Section */}
        <section className="flex min-h-screen w-screen shrink-0 flex-col justify-end px-4 pb-14 pt-20 md:px-12 md:pb-24 md:pt-24">
          <div className="max-w-3xl">
            <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-8 font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground duration-1000 sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl">
              <span className="text-balance">
                Искусственный интеллект
              </span>
            </h1>
            <p className="mb-6 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-base leading-relaxed text-foreground/90 duration-1000 delay-200 md:mb-8 md:text-xl">
              <span className="text-pretty">
                Развитие и влияние искусственного интеллекта на современное общество — как технологии меняют нашу жизнь уже сегодня.
              </span>
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-3 duration-1000 delay-300 sm:flex-row sm:items-center sm:gap-4">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => scrollToSection(2)}
              >
                Изучить влияние
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(1)}>
                Примеры применения
              </MagneticButton>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500 md:bottom-8">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-foreground/80">Листайте вправо</p>
              <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-foreground/80" />
              </div>
            </div>
          </div>
        </section>

        <WorkSection />
        <ServicesSection />
        <AboutSection scrollToSection={scrollToSection} />
        <ContactSection />
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}