import { useReveal } from "@/hooks/use-reveal"

export function AboutSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start overflow-y-auto px-4 pt-16 md:items-center md:overflow-y-hidden md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-2xl font-light leading-[1.1] tracking-tight text-foreground sm:text-3xl md:mb-4 md:text-6xl lg:text-7xl">
                ИИ уже
                <br />
                здесь
                <br />
                <span className="text-foreground/40">с нами</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-xs leading-relaxed text-foreground/90 sm:text-sm md:text-lg">
                Искусственный интеллект — это не далёкое будущее. Каждый день миллиарды людей используют его, даже не замечая этого.
              </p>
              <p className="hidden max-w-md text-xs leading-relaxed text-foreground/90 sm:block sm:text-sm md:text-lg">
                Понять, как работает ИИ и как он влияет на общество — значит понять, в каком мире мы будем жить завтра.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center space-y-3 md:space-y-12">
            {[
              { value: "300M+", label: "Пользователей", sublabel: "ChatGPT за первый год", direction: "right" },
              { value: "40%", label: "Рабочих мест", sublabel: "Затронет автоматизация к 2030", direction: "left" },
              { value: "2011", label: "Год", sublabel: "Когда ИИ впервые победил в Jeopardy!", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-3 border-l border-foreground/30 pl-3 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <div className="text-2xl font-light text-foreground sm:text-3xl md:text-6xl lg:text-7xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-sm font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
