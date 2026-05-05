import { Button } from "@/components/ui/button";
import { clinicConfig } from "@/config/clinic";
import { Sparkles } from "lucide-react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
    <nav className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-bold text-lg">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
          <Sparkles className="w-4 h-4" />
        </span>
        <span className="tracking-tight">{clinicConfig.name}</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);