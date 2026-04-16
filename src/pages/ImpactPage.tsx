import { useNavigate, useParams } from "react-router-dom"
import Icon from "@/components/ui/icon"

const sectionImages: Record<string, string> = {
  labor: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/74f9e886-9d1d-42b8-b5f8-4f72a374c98b.jpg",
  ethics: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/74f9e886-9d1d-42b8-b5f8-4f72a374c98b.jpg",
  science: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/74f9e886-9d1d-42b8-b5f8-4f72a374c98b.jpg",
  everyday: "https://cdn.poehali.dev/projects/12e9f643-468f-44a7-812b-b7d8d61b34ab/files/74f9e886-9d1d-42b8-b5f8-4f72a374c98b.jpg",
}

const sections: Record<string, {
  icon: string
  title: string
  subtitle: string
  intro: string
  topics: { heading: string; text: string; facts: string[] }[]
}> = {
  labor: {
    icon: "Briefcase",
    title: "Рынок труда",
    subtitle: "Влияние ИИ на занятость",
    intro: "ИИ меняет рынок труда быстрее, чем любая предыдущая технологическая революция. Одни профессии исчезают, другие трансформируются, третьи — появляются.",
    topics: [
      {
        heading: "Автоматизация рутинных задач",
        text: "ИИ берёт на себя повторяющиеся, предсказуемые задачи: обработку документов, ввод данных, базовую аналитику. Это освобождает людей для творческой и стратегической работы.",
        facts: [
          "McKinsey: до 30% задач в 60% профессий могут быть автоматизированы к 2030 году",
          "Бухгалтеры, кассиры, операторы колл-центров — в зоне высокого риска",
          "Goldman Sachs: ИИ затронет 300 млн рабочих мест по всему миру",
        ],
      },
      {
        heading: "Новые профессии",
        text: "Параллельно с исчезновением старых появляются совершенно новые роли: промпт-инженеры, тренеры ИИ-моделей, специалисты по ИИ-этике, аналитики данных.",
        facts: [
          "Prompt engineering — одна из самых быстрорастущих профессий 2024 года",
          "Спрос на специалистов по машинному обучению вырос на 74% за 4 года",
          "World Economic Forum: к 2027 году появится 69 млн новых рабочих мест в tech",
        ],
      },
      {
        heading: "Трансформация существующих профессий",
        text: "Большинство профессий не исчезнут, но изменятся. Врач с ИИ-ассистентом эффективнее врача без него. Юрист, умеющий работать с ИИ, заменяет двух обычных.",
        facts: [
          "Врачи, использующие ИИ, ставят диагнозы на 20% точнее",
          "Юристы сокращают время на исследование прецедентов в 10 раз",
          "Программисты с Copilot пишут код в 2 раза быстрее",
        ],
      },
    ],
  },
  ethics: {
    icon: "Shield",
    title: "Этика и безопасность",
    subtitle: "Ответственное развитие ИИ",
    intro: "Чем мощнее становится ИИ, тем важнее задуматься о последствиях. Предвзятость, слежка, дипфейки — это реальные вызовы, которые решает общество уже сегодня.",
    topics: [
      {
        heading: "Предвзятость алгоритмов",
        text: "ИИ обучается на данных, созданных людьми. Если данные содержат предрассудки — расовые, гендерные, социальные — ИИ их усиливает и масштабирует.",
        facts: [
          "Amazon закрыл ИИ для найма — он систематически занижал резюме женщин",
          "Алгоритм распознавания лиц ошибается в 34% случаев для тёмнокожих женщин",
          "Кредитные алгоритмы чаще отказывают заявителям из бедных районов",
        ],
      },
      {
        heading: "Дипфейки и дезинформация",
        text: "ИИ позволяет создавать убедительные фальшивые видео, аудио и тексты. Это угрожает доверию к медиа и открывает новые возможности для манипуляций.",
        facts: [
          "В 2024 году количество дипфейков выросло на 900% по сравнению с 2023",
          "ИИ-дипфейки использовались в 25+ предвыборных кампаниях мира",
          "Deepfake-порно затрагивает 90% женщин среди жертв",
        ],
      },
      {
        heading: "Регулирование и ответственность",
        text: "Правительства и компании разрабатывают правила ответственного использования ИИ. ЕС принял первый в мире закон об ИИ. США и Китай работают над своими подходами.",
        facts: [
          "EU AI Act вступил в силу в 2024 — первый в мире комплексный закон об ИИ",
          "OpenAI, Google, Microsoft подписали добровольные обязательства по безопасности",
          "100+ стран работают над национальными стратегиями регулирования ИИ",
        ],
      },
    ],
  },
  science: {
    icon: "FlaskConical",
    title: "Наука и прогресс",
    subtitle: "ИИ как двигатель открытий",
    intro: "ИИ ускоряет научные открытия в сотни раз. Задачи, которые раньше требовали десятилетий работы тысяч учёных, теперь решаются за месяцы.",
    topics: [
      {
        heading: "Биология и медицина",
        text: "AlphaFold решил задачу предсказания структуры белков — одну из главных загадок биологии последних 50 лет. Это открывает путь к лечению тысяч болезней.",
        facts: [
          "AlphaFold предсказал структуры 200 млн белков — практически всех известных",
          "ИИ ускорил разработку вакцины от COVID-19 с 10 лет до 1 года",
          "Нейросети находят новые антибиотики против устойчивых бактерий",
        ],
      },
      {
        heading: "Климат и экология",
        text: "ИИ помогает моделировать климат, оптимизировать энергопотребление и искать новые материалы для солнечных батарей и аккумуляторов.",
        facts: [
          "ИИ-модели предсказывают погоду точнее традиционных методов на 20%",
          "Google DeepMind сократил энергопотребление дата-центров на 40%",
          "ИИ открыл новые материалы для батарей с удвоенной ёмкостью",
        ],
      },
      {
        heading: "Физика и космос",
        text: "ИИ анализирует данные телескопов, ускорителей частиц и гравитационных волн, находя паттерны, невидимые человеческому глазу.",
        facts: [
          "ИИ обнаружил тысячи новых экзопланет в данных телескопа Кеплер",
          "Нейросети помогают управлять плазмой в термоядерных реакторах",
          "ИИ ускорил анализ данных коллайдера ЦЕРН в 1000 раз",
        ],
      },
    ],
  },
  everyday: {
    icon: "Smartphone",
    title: "Повседневная жизнь",
    subtitle: "ИИ рядом с каждым",
    intro: "ИИ уже встроен в нашу повседневность — в смартфоны, приложения, умные устройства. Мы используем его ежедневно, часто не осознавая этого.",
    topics: [
      {
        heading: "Голосовые помощники",
        text: "Siri, Алиса, Google Assistant, Alexa — миллиарды людей каждый день разговаривают с ИИ, который понимает контекст, намерения и акцент.",
        facts: [
          "500 млн человек ежемесячно используют голосовые помощники",
          "Алиса от Яндекса обрабатывает более 100 млн запросов в день",
          "К 2026 году голосовой поиск составит 50% всех поисковых запросов",
        ],
      },
      {
        heading: "Рекомендации и персонализация",
        text: "Netflix, Spotify, YouTube, TikTok — алгоритмы ИИ подбирают контент под каждого пользователя, удерживая внимание часами.",
        facts: [
          "80% просмотров на Netflix — результат рекомендаций ИИ",
          "Алгоритм TikTok нужно всего 8 видео, чтобы точно понять вкусы пользователя",
          "Spotify Discover Weekly: 40 млн пользователей слушают каждую неделю",
        ],
      },
      {
        heading: "Умный дом и транспорт",
        text: "ИИ управляет термостатами, охраной, светом. Навигационные алгоритмы ежедневно прокладывают миллиарды маршрутов, а автопилот уже ездит по дорогам.",
        facts: [
          "Tesla Autopilot проехал более 700 млн километров в автономном режиме",
          "Умные термостаты Nest экономят 15% энергии в домах",
          "ИИ-светофоры в Питтсбурге сократили время в пробках на 40%",
        ],
      },
    ],
  },
}

export default function ImpactPage() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const section = slug ? sections[slug] : null

  if (!section) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="mb-4 text-foreground/50">Раздел не найден</p>
          <button onClick={() => navigate(-1)} className="text-sm underline">
            Вернуться назад
          </button>
        </div>
      </div>
    )
  }

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
              src={sectionImages[slug!]}
              alt={section.title}
              className="h-56 w-full object-cover md:h-72"
            />
          </div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-foreground/40">Влияние ИИ</p>
          <h1 className="mb-4 font-sans text-4xl font-light tracking-tight md:text-6xl">{section.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">{section.intro}</p>
        </div>

        <div className="space-y-6">
          {section.topics.map((topic, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-sm md:p-8"
            >
              <h2 className="mb-3 font-sans text-xl font-medium md:text-2xl">{topic.heading}</h2>
              <p className="mb-5 leading-relaxed text-foreground/70">{topic.text}</p>
              <div className="space-y-2">
                {topic.facts.map((fact, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                    <p className="text-sm text-foreground/60">{fact}</p>
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
