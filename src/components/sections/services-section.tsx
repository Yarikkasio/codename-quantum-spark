import { useNavigate } from "react-router-dom"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Рынок труда",
    description: "Автоматизация рутинных задач и появление новых профессий — ИИ меняет занятость",
    direction: "top",
    slug: "labor",
    tags: ["Автоматизация", "Новые профессии", "Трансформация"],
  },
  {
    title: "Этика и безопасность",
    description: "Проблемы предвзятости алгоритмов, слежки и ответственности за решения ИИ",
    direction: "right",
    slug: "ethics",
    tags: ["Предвзятость", "Дипфейки", "Регулирование"],
  },
  {
    title: "Наука и прогресс",
    description: "Ускорение научных открытий: от климатологии до расшифровки белков",
    direction: "left",
    slug: "science",
    tags: ["Биология", "Климат", "Физика"],
  },
  {
    title: "Повседневная жизнь",
    description: "Голосовые помощники, рекомендации, навигация — ИИ уже рядом с каждым",
    direction: "bottom",
    slug: "everyday",
    tags: ["Голосовые ИИ", "Рекомендации", "Умный дом"],
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Влияние
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ключевые аспекты</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-14 md:gap-y-8 lg:gap-x-20">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isVisible={isVisible}
              onNavigate={() => navigate(`/impact/${service.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
  onNavigate,
}: {
  service: { title: string; description: string; direction: string; tags: string[] }
  index: number
  isVisible: boolean
  onNavigate: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
      <p className="mb-4 max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-foreground/10 px-3 py-1 font-mono text-xs text-foreground/40"
          >
            {tag}
          </span>
        ))}
        <button
          onClick={onNavigate}
          className="ml-auto flex items-center gap-1.5 rounded-full border border-foreground/20 px-3 py-1 font-mono text-xs text-foreground/50 transition-all duration-200 hover:border-foreground/50 hover:bg-foreground hover:text-background"
        >
          Подробнее
          <Icon name="ArrowRight" size={11} />
        </button>
      </div>
    </div>
  )
}
