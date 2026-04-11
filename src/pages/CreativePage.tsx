import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const topics = [
  {
    id: "images",
    icon: "Image",
    title: "Генерация изображений",
    subtitle: "Визуальное творчество",
    description:
      "Нейросети создают фотореалистичные изображения, иллюстрации и арт по текстовому описанию за секунды. Это меняет профессии дизайнера, иллюстратора и фотографа.",
    examples: [
      "Midjourney создаёт художественные иллюстрации по текстовому запросу",
      "DALL-E 3 генерирует точные изображения с текстом внутри",
      "Stable Diffusion позволяет редактировать реальные фотографии",
    ],
  },
  {
    id: "music",
    icon: "Music",
    title: "Генерация музыки",
    subtitle: "Звук и аудио",
    description:
      "ИИ сочиняет музыку в любом жанре, создаёт звуковые эффекты и клонирует голоса. Музыкант может создать полноценный саундтрек в одиночку, без оркестра.",
    examples: [
      "Suno создаёт полные песни с вокалом и инструментами за 30 секунд",
      "Udio генерирует профессиональные треки в любом жанре",
      "ElevenLabs клонирует голос по 30-секундному образцу",
    ],
  },
  {
    id: "text",
    icon: "FileText",
    title: "Генерация текстов",
    subtitle: "Письмо и сценарии",
    description:
      "ИИ пишет статьи, сценарии, рекламные тексты, поэзию и код. Это инструмент, который усиливает возможности автора, а не заменяет его творческое мышление.",
    examples: [
      "ChatGPT помогает сценаристам разрабатывать сюжетные арки",
      "Jasper пишет рекламные тексты, которые конвертируют",
      "GitHub Copilot пишет до 40% кода за программистов",
    ],
  },
  {
    id: "video",
    icon: "Video",
    title: "Генерация видео",
    subtitle: "Видео и анимация",
    description:
      "Новые ИИ-модели создают реалистичное видео из текста или изображения. Это открывает возможности для создания кино, рекламы и контента без дорогостоящего оборудования.",
    examples: [
      "Sora (OpenAI) создаёт видео до 1 минуты по текстовому описанию",
      "Runway Gen-3 редактирует видео через текстовые команды",
      "HeyGen создаёт аватар-видео с синхронизацией губ на 40+ языках",
    ],
  },
]

export default function CreativePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-foreground"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-foreground/40">Применение ИИ</p>
          <h1 className="mb-4 font-sans text-4xl font-light tracking-tight md:text-6xl">Творчество</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            ИИ становится творческим партнёром — он не заменяет художника, а многократно усиливает его возможности.
          </p>
        </div>

        <div className="space-y-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-sm md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon name={topic.icon as "Image"} size={20} />
                </div>
                <div>
                  <h2 className="font-sans text-xl font-medium md:text-2xl">{topic.title}</h2>
                  <p className="font-mono text-xs text-foreground/40">{topic.subtitle}</p>
                </div>
              </div>
              <p className="mb-5 leading-relaxed text-foreground/70">{topic.description}</p>
              <div className="space-y-2">
                {topic.examples.map((ex, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                    <p className="text-sm text-foreground/60">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
