import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Jaine S.",
		role: "Paciente",
		text: "Minha família toda é paciente da clínica do Dr Rafael Soares, simpático e ótimo profissional.",
		avatar: "https://lh3.googleusercontent.com/a/ACg8ocKb39dVwgWKuB-FtWxSNO8Dv95SsrRTdXJmVCLvg7vQAcfsSg=w34-h34-p-rp-mo-br100"
	},
	{
		name: "Marciano P.",
		role: "Paciente",
		text: "Dr Rafael maravilhoso! Recomendadíssimo.",
		avatar: "https://lh3.googleusercontent.com/a/ACg8ocJbXeZCslnwSba4vLls9V8SDippFlA6xVA2NcB7X94UMcqp6Q=w34-h34-p-rp-mo-br100"
	},
	{
		name: "Lucas M.",
		role: "Paciente",
		text: "Profissionalismo e competência!",
		avatar: "https://lh3.googleusercontent.com/a/ACg8ocK79WD0IOLjwFugUkYaB_lRPhaIpdcideij-cAI7XbX6-v-jA=w34-h34-p-rp-mo-br100"
	},
	{
		name: "Roger E.",
		role: "Paciente",
		text: "Melhor de Iguatu e região.",
		avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXcp2WP7q2TnerBRryDTvVqQCI-oKw6YtxSbbpjU6xNbxOSdf8=w34-h34-p-rp-mo-br100"
	},
	{
		name: "Jhonata H.",
		role: "Local Guide",
		text: "Ótimo atendimento e bons profissionais.",
		avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX17W8H7hrXG2ho4Zq3u1OTgN302LbWvSwq5SqzVF2CVvIvCUY_=w34-h34-p-rp-mo-ba3-br100"
	},
	{
		name: "Rosana F.",
		role: "Paciente",
		text: "Ótimo, amo o trabalho dele.",
		avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWyn11lUswI__UETb592_hKmcZnD1UtTitETa-49H4kdbphaUMi=w34-h34-p-rp-mo-br100"
	},
	{
		name: "Geiza L.",
		role: "Paciente",
		text: "Ótimo atendimento.",
		avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVMq57iRunDo8euKmNkwc1km2G30_12V6GJ5zbGSKGSpH-fWL10=w34-h34-p-rp-mo-br100"
	},
	{
		name: "L.S Mary",
		role: "Paciente",
		text: "Melhor dentista do Iguatu.",
		avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ_PJA6LWi9pMWdVYV-Ufh04SeB3BM6sbSD6rdvTyTw9_ZAeg=w34-h34-p-rp-mo-br100"
	}
];

export const Testimonials = () => (
	<section id="depoimentos" className="py-24">
		<div className="container">
			<div className="max-w-2xl mb-14">
				<span className="text-sm font-semibold text-primary uppercase tracking-wider">Depoimentos</span>
				<h2 className="mt-2 text-3xl md:text-5xl font-bold">Quem confia, recomenda.</h2>
			</div>
			<div className="grid md:grid-cols-3 gap-6">
				{testimonials.map((t) => (
					<figure key={t.name} className="p-7 rounded-2xl bg-card border border-border shadow-card">
						<div className="flex gap-0.5 text-primary mb-4">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star key={i} className="w-4 h-4 fill-current" />
							))}
						</div>
						<blockquote className="text-foreground leading-relaxed">"{t.text}"</blockquote>
						<figcaption className="mt-6 flex items-center gap-3">
							<img src={t.avatar} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
							<div>
								<div className="font-semibold text-sm">{t.name}</div>
								<div className="text-xs text-muted-foreground">{t.role}</div>
							</div>
						</figcaption>
					</figure>
				))}
			</div>
		</div>
	</section>
);