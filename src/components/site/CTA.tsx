import { Button } from "@/components/ui/button";
import { clinicConfig } from "@/config/clinic";
import { MessageCircle } from "lucide-react";

export const CTA = () => (
  <section className="py-20">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-elegant">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Pronto para transformar seu sorriso?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Fale agora com nossa equipe e agende uma avaliação personalizada.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-7 h-12">
            <a href={clinicConfig.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);