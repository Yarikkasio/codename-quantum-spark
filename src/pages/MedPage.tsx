import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const topics = [
  {
    id: "imaging",
    icon: "ScanLine",
    title: "Анализ снимков",
    subtitle: "Рентген, МРТ, КТ",
    description:
      "ИИ анализирует медицинские снимки точнее опытных врачей. Алгоритмы обнаруживают опухоли, переломы и аномалии на ранней стадии — за секунды, без усталости и человеческой ошибки.",
    examples: [
      "DeepMind обнаруживает рак груди с точностью 89% (врачи — 86%)",
      "ИИ диагностирует диабетическую ретинопатию по фото глаза",
      "Автоматическое выявление COVID-19 на КТ лёгких за 20 секунд",
    ],
  },
  {
    id: "drugs",
    icon: "Pill",
    title: "Поиск лекарств",
    subtitle: "Разработка препаратов",
    description:
      "Создание нового лекарства раньше занимало 10–15 лет и стоило миллиарды. ИИ сокращает этот путь до нескольких лет, предсказывая, какие молекулы будут эффективны против болезни.",
    examples: [
      "AlphaFold предсказал структуру 200 миллионов белков",
      "ИИ нашёл новый антибиотик против устойчивых бактерий за 4 дня",
      "Insilico Medicine разработала лекарство от фиброза за 18 месяцев",
    ],
  },
  {
    id: "diagnosis",
    icon: "Stethoscope",
    title: "Диагностика",
    subtitle: "Постановка диагноза",
    description:
      "ИИ-системы анализируют симптомы, историю болезни и результаты анализов, помогая врачам быстрее ставить точные диагнозы даже при редких заболеваниях.",
    examples: [
      "IBM Watson for Oncology рекомендует лечение рака",
      "ИИ диагностирует редкие генетические болезни по фото лица",
      "Chatbot-врач снижает нагрузку на скорую помощь на 30%",
    ],
  },
  {
    id: "surgery",
    icon: "Activity",
    title: "Хирургия",
    subtitle: "Роботизированные операции",
    description:
      "Роботы с ИИ ассистируют хирургам: устраняют дрожание рук, делают разрезы точностью до долей миллиметра, анализируют операционное поле в реальном времени.",
    examples: [
      "Da Vinci выполнил более 10 миллионов операций по всему миру",
      "ИИ прогнозирует осложнения во время операции",
      "Нейросеть планирует сложные нейрохирургические вмешательства",
    ],
  },
]

export default function MedPage() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-96 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-teal-200/35 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:px-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-foreground"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        <div className="mb-12">
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img
              src="https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/1796158d-3b73-4b53-9e4d-a467589c4705.jpg"
              alt="ИИ в медицине"
              className="h-56 w-full object-cover md:h-72"
            />
          </div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-foreground/40">Применение ИИ</p>
          <h1 className="mb-4 font-sans text-4xl font-light tracking-tight md:text-6xl">Медицина</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            Искусственный интеллект революционизирует здравоохранение — от постановки диагноза до разработки новых препаратов.
          </p>
        </div>

        <div className="space-y-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-sm md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon name={topic.icon as "ScanLine"} size={20} />
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
