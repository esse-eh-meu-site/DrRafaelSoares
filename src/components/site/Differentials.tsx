import { Cpu, Heart, HandHeart } from "lucide-react";

const items = [
  { icon: Cpu, title: "Tecnologia de Ponta", desc: "Equipamentos digitais 3D, scanner intraoral e diagnóstico por imagem de última geração." },
  { icon: Heart, title: "Conforto em Cada Detalhe", desc: "Ambiente projetado para acolher você com tranquilidade do início ao fim do tratamento." },
  { icon: HandHeart, title: "Atendimento Humanizado", desc: "Time multidisciplinar focado em escutar, explicar e cuidar de cada paciente." },
];

export const Differentials = () => (
  <section id="diferenciais" className="py-2 bg-gradient-soft">
    <div className="container grid lg:grid-cols-3 gap-10">
      {items.map((it) => (
        <div key={it.title} className="flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-card shadow-soft grid place-items-center text-primary">
            <it.icon className="w-6 h-6" />
          </div>
          <h3 className="mt-5 text-xl font-bold">{it.title}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
        </div>
      ))}
    </div>
  </section>
);