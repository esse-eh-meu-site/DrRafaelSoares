import { Smile, Braces, Sparkles, Stethoscope } from "lucide-react";

const services = [
  { icon: Smile, title: "Implantes", desc: "Reabilitação completa com implantes seguros e durabilidade comprovada." },
  { icon: Braces, title: "Ortodontia", desc: "Aparelhos estéticos, autoligados e alinhadores invisíveis." },
  { icon: Sparkles, title: "Estética Dental", desc: "Clareamento, lentes de contato e harmonização do sorriso." },
  { icon: Stethoscope, title: "Check-up Preventivo", desc: "Avaliação completa para manter sua saúde bucal em dia." },
];

export const Services = () => (
  <section id="servicos" className="py-24">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Especialidades</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold">Cuidado completo para todas as fases da sua vida.</h2>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-accent text-primary grid place-items-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);