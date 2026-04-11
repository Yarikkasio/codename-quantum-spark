import { useNavigate } from "react-router-dom"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const projects = [
  {
    number: "01",
    title: "Медицина",
    category: "Диагностика, анализ снимков, поиск лекарств",
    year: "2024",
    direction: "left",
    href: "/apply/medicine",
    tags: ["Анализ снимков", "Поиск лекарств", "Диагностика", "Хирургия"],
    image: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/6219c70e-ea2f-4802-a72e-6772365e3b9b.jpg",
  },
  {
    number: "02",
    title: "Образование",
    category: "Персонализированное обучение и умные репетиторы",
    year: "2024",
    direction: "right",
    href: "/apply/education",
    tags: ["Персонализация", "ИИ-репетиторы", "Проверка работ", "Доступность"],
    image: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/cd5b772f-7872-4771-b43f-5ce1b2d4d6b3.jpg",
  },
  {
    number: "03",
    title: "Творчество",
    category: "Генерация изображений, музыки и текстов",
    year: "2023",
    direction: "left",
    href: "/apply/creative",
    tags: ["Изображения", "Музыка", "Тексты", "Видео"],
    image: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/2c4e479e-f2ef-4a4a-bccb-8b86ae0dcfb7.jpg",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Применение
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Где ИИ меняет мир</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              isVisible={isVisible}
              onNavigate={() => navigate(project.href)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
  onNavigate,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string; tags: string[]; image: string }
  index: number
  isVisible: boolean
  onNavigate: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
            {project.number}
          </span>
          <img
            src={project.image}
            alt={project.title}
            className="h-14 w-20 rounded-lg object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:h-16 md:w-24"
          />
          <div>
            <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
          </div>
        </div>
        <button
          onClick={onNavigate}
          className="flex shrink-0 items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium text-foreground/60 transition-all duration-200 hover:border-foreground/50 hover:bg-foreground hover:text-background"
        >
          Подробнее
          <Icon name="ArrowRight" size={12} />
        </button>
      </div>
      <div className="mt-3 ml-12 flex flex-wrap gap-2 md:ml-16">
        {project.tags.map((tag) => (
          <span
            key={tag}
            onClick={onNavigate}
            className="cursor-pointer rounded-full border border-foreground/10 px-3 py-1 font-mono text-xs text-foreground/40 transition-all duration-200 hover:border-foreground/30 hover:text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}