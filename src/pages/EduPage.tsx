import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const topics = [
  {
    id: "personal",
    icon: "UserCheck",
    title: "Персонализированное обучение",
    subtitle: "Адаптивные программы",
    description:
      "ИИ анализирует прогресс каждого ученика и подстраивает материал под его темп, слабые места и стиль обучения. Вместо одного урока для всех — уникальный путь для каждого.",
    examples: [
      "Khan Academy адаптирует задания на основе ошибок ученика",
      "Duolingo меняет сложность в реальном времени по алгоритму",
      "ИИ выявляет пробелы в знаниях до того, как появятся плохие оценки",
    ],
  },
  {
    id: "tutor",
    icon: "MessageCircle",
    title: "Умные репетиторы",
    subtitle: "24/7 поддержка",
    description:
      "ИИ-репетиторы доступны в любое время, отвечают на вопросы, объясняют непонятное разными способами и никогда не устают. Качественное образование теперь не привязано к дорогому преподавателю.",
    examples: [
      "Khanmigo — ИИ-репетитор, объясняет концепции сократовским методом",
      "GPT-4 помогает решать задачи по математике с пошаговым разбором",
      "ИИ-тьюторы снижают стоимость репетиторства в 10–20 раз",
    ],
  },
  {
    id: "assessment",
    icon: "ClipboardCheck",
    title: "Оценка и обратная связь",
    subtitle: "Автоматическая проверка",
    description:
      "ИИ проверяет эссе, код и ответы мгновенно, давая развёрнутую обратную связь. Учитель освобождается от рутины и может больше времени уделять живому общению с учениками.",
    examples: [
      "Turnitin использует ИИ для проверки уникальности работ",
      "Gradescope автоматически проверяет задания по математике и коду",
      "ИИ анализирует речь и произношение при изучении языков",
    ],
  },
  {
    id: "accessibility",
    icon: "Globe",
    title: "Доступность образования",
    subtitle: "Образование для всех",
    description:
      "ИИ переводит, субтитрирует и адаптирует учебные материалы в реальном времени, открывая доступ к образованию для людей с ограниченными возможностями и в отдалённых регионах.",
    examples: [
      "Автоматический перевод лекций на 100+ языков мира",
      "ИИ создаёт субтитры и аудиоопись для людей с нарушением слуха/зрения",
      "Голосовые ИИ-помощники помогают детям с дислексией",
    ],
  },
]

export default function EduPage() {
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
              src="https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/b4d2be64-020e-4308-8c38-2f4c19888a2c.jpg"
              alt="ИИ в образовании"
              className="h-56 w-full object-cover md:h-72"
            />
          </div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-foreground/40">Применение ИИ</p>
          <h1 className="mb-4 font-sans text-4xl font-light tracking-tight md:text-6xl">Образование</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            ИИ делает качественное образование доступным для каждого — персонализированным, доступным и эффективным.
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
                  <Icon name={topic.icon as "UserCheck"} size={20} />
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
