import { clinicConfig } from "@/config/clinic";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => (
  <footer id="contato" className="border-t border-border bg-muted/30">
    <div className="container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <div className="font-bold text-xl">{clinicConfig.name}</div>
        <p className="mt-3 text-sm text-muted-foreground max-w-xs">{clinicConfig.tagline}. Sorrisos saudáveis para a vida toda.</p>
        <div className="flex gap-3 mt-5">
          <a href={clinicConfig.social.instagram} className="w-9 h-9 grid place-items-center rounded-full bg-card border border-border hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href={clinicConfig.social.facebook} className="w-9 h-9 grid place-items-center rounded-full bg-card border border-border hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="font-semibold mb-3 text-foreground">Contato</div>
        <div className="flex gap-2 text-muted-foreground"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />{clinicConfig.address}</div>
        <div className="flex gap-2 text-muted-foreground"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />{clinicConfig.phone}</div>
        <div className="flex gap-2 text-muted-foreground"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />{clinicConfig.email}</div>
        <div className="flex gap-2 text-muted-foreground"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />{clinicConfig.hours}</div>
      </div>
      <div className="rounded-2xl overflow-hidden border border-border h-56 md:h-auto">
        <iframe
          title="Mapa"
          src={clinicConfig.mapEmbed}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} {clinicConfig.name}. Todos os direitos reservados.
    </div>
  </footer>
);