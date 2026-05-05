import { Button } from "@/components/ui/button";
import { clinicConfig } from "@/config/clinic";
import heroImg from "@/assets/hero-clinic.jpg";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero -z-10" />
    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl -z-10" />
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> CRO Verificado • +10 anos de experiência
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
          O seu sorriso merece <span className="text-primary">o melhor cuidado</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Tratamentos odontológicos modernos, acolhedores e personalizados para devolver
          confiança e saúde ao seu sorriso.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7 h-12 shadow-elegant">
            <a href={clinicConfig.whatsapp} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12">
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
          <div><div className="text-2xl font-bold text-foreground">+15k</div>Sorrisos transformados</div>
          <div className="w-px h-10 bg-border" />
          <div><div className="text-2xl font-bold text-foreground">5.0★</div>Avaliação Google</div>
        </div>
      </div>
      <div className="relative animate-fade-in">
        <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
        <img
          src={heroImg}
          alt="Ambiente clínico moderno e acolhedor"
          width={1536}
          height={1024}
          className="relative rounded-[2rem] shadow-elegant w-full h-auto object-cover aspect-[4/3]"
        />
      </div>
    </div>
  </section>
);