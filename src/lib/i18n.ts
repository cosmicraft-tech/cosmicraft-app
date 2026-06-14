export type Lang = 'en' | 'pt';

export const i18n: Record<Lang, Record<string, string>> = {
	en: {
		toggle: 'PT',
		tagline: 'Future-proof software, crafted to last.',
		sub: 'Senior software architecture for companies that need to scale — without over-engineering. 15+ years building platforms that last.',
		cta1: "Let's talk",
		cta2: 'Email us',
	},
	pt: {
		toggle: 'EN',
		tagline: 'Software à prova de futuro, feito para durar.',
		sub: 'Arquitetura de software sênior para empresas que precisam escalar — sem over-engineering. 15+ anos construindo plataformas que duram.',
		cta1: 'Fale com a gente',
		cta2: 'Enviar e-mail',
	},
};

/**
 * Decide o idioma inicial: respeita a escolha salva; senão,
 * usa o idioma do navegador; senão, cai no inglês (padrão).
 */
export function resolveLang(saved: string | null, navigatorLang: string | undefined): Lang {
	if (saved === 'pt' || saved === 'en') return saved;
	return (navigatorLang ?? '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}
