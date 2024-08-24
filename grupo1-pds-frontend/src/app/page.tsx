"use client"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

const Section = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <section className={`w-full py-12 md:py-24 lg:py-32 ${className ?? ''}`}>
    <div className="container px-4 md:px-6">{children}</div>
  </section>
)

const Feature = ({ title, description }: { title: string; description: string }) => (
  <li>
    <div className="grid gap-1">
      <h3 className="text-xl font-bold text-[#EBD3F8]">{title}</h3>
      <p className="text-[#EBD3F8]">{description}</p>
    </div>
  </li>
)

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

export default function Home() {
  const features = [
    {
      title: "Monitoramento 24/7 e Resposta a Emergências",
      description: "Nossos sensores avançados e sistema de monitoramento rastreiam continuamente o bem-estar dos idosos e alertam imediatamente nossa equipe para qualquer emergência."
    },
    {
      title: "Planos de Cuidados Personalizados",
      description: "Nossa equipe de profissionais de saúde trabalha de perto com as famílias para criar planos de cuidados personalizados que atendam às necessidades únicas de cada idoso."
    },
    {
      title: "Gestão de Medicamentos",
      description: "O smart pillbox e os lembretes de medicação do SafeElder ajudam a garantir que os idosos tomem seus medicamentos na hora certa, reduzindo o risco de complicações."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      quote: "O SafeElder tem sido uma salvação para minha mãe idosa. O monitoramento 24/7 e a resposta a emergências me dão tranquilidade, e o plano de cuidados personalizado melhorou muito a qualidade de vida dela."
    },
    {
      name: "Sara Oliveira",
      quote: "Eu estava hesitante em experimentar um novo serviço, mas o SafeElder superou minhas expectativas. O recurso de gestão de medicamentos foi revolucionário, e a equipe de suporte é extremamente prestativa."
    },
    {
      name: "Lisa Wong",
      quote: "O plano de cuidados personalizado criado pela equipe do SafeElder fez uma diferença significativa na vida diária do meu pai. Ele está mais independente, e eu me sinto confiante sabendo que ele está em boas mãos."
    },
    {
      name: "Roberto Lima",
      quote: "Os serviços do SafeElder foram inestimáveis para me ajudar a cuidar da minha mãe idosa. A equipe de suporte está sempre disponível para responder às minhas perguntas, e o sistema de monitoramento é incrivelmente confiável."
    }
  ];

  const router = useRouter()


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Section className="xl:py-48 bg-[#7A1CAC]">
          <section className="w-full py-12 md:py-12 lg:py-12 xl:py-12 bg-[#7A1CAC]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter text-[#EBD3F8] sm:text-5xl xl:text-6xl/none">
                      Soluções Seguras e Cuidadosas para Idosos
                    </h1>
                    <p className="max-w-[600px] text-[#EBD3F8] md:text-xl">
                      SafeElder é uma plataforma abrangente que oferece cuidados personalizados, monitoramento de segurança e assistência em emergências para idosos, proporcionando tranquilidade aos seus entes queridos.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="/login"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#EBD3F8] px-8 text-sm font-medium text-[#7A1CAC] shadow transition-colors hover:bg-[#EBD3F8]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Cadastre-se
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-[#7A1CAC] text-[#EBD3F8] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#EBD3F8] hover:text-[#7A1CAC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
                {/* <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                /> */}
              </div>
            </div>
          </section>
        </Section>

        <Section className="bg-[#AD49E1]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* Key Features header */}
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {features.map((feature, index) => (
                  <Feature key={index} {...feature} />
                ))}
              </ul>
            </div>
            {/* <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            /> */}
          </div>
        </Section>

        {/* <Section>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            Testimonials header
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {[0, 1].map(columnIndex => (
              <div key={columnIndex} className="flex flex-col justify-center space-y-4">
                {testimonials.slice(columnIndex * 2, columnIndex * 2 + 2).map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
              </div>
            ))}
          </div>
        </Section> */}
      </main>
    </div>
  )
}