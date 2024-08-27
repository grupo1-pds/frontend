import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { features, testimonials } from '@/lib/constants'

const Testimonial = ({ name, quote }: { name: string; quote: string }) => (
  <div className="grid gap-4 rounded-lg border bg-[#EBD3F8] p-6">
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-[#2E073F]">Caregiver</p>
      </div>
    </div>
    <blockquote className="text-[#2E073F]">{quote}</blockquote>
  </div>
)

const Section = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <section className={`w-full py-12 md:py-24 lg:py-32 ${className ?? ''}`}>
    <div className="container px-4 md:px-6">{children}</div>
  </section>
)
const Feature = ({ title, description }: { title: string; description: string }) => (
  <li>
    <div className="grid gap-1">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  </li>
)

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
      <Section className="xl:py-48 bg-[#6A9C89] min-h-[100vh] flex items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    <span className="text-[#FFF5E4]">SafeElder:</span> Cuidado e Segurança para Idosos
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Com o <span className="font-semibold">SafeElder</span>, oferecemos uma plataforma abrangente de cuidados personalizados, monitoramento de segurança e assistência em emergências, trazendo tranquilidade para idosos e seus familiares.
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ca6e27] px-8 text-sm font-medium text-[#FFF5E4] shadow transition-colors hover:bg-[#CD5C08]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Cadastre-se
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#FFF5E4] bg-[#6A9C89] text-[#FFF5E4] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#FFF5E4] hover:text-[#6A9C89] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Conheça os Recursos
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/safeElder-hero.png"
                  alt="SafeElder - Cuidado e segurança para idosos"
                  className="w-full h-auto max-w-[400px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-[#568371] h-[100vh]">
          <div id="features" className="flex flex-col items-center justify-center space-y-4 text-center">
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {features.map((feature, index) => (
                  <Feature key={index} {...feature} />
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}