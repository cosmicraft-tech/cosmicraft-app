import { describe, expect, it } from 'vitest';
import { i18n, resolveLang } from './i18n';

describe('resolveLang', () => {
	it('respeita a preferência salva pelo usuário', () => {
		expect(resolveLang('pt', 'en-US')).toBe('pt');
		expect(resolveLang('en', 'pt-BR')).toBe('en');
	});

	it('usa o idioma do navegador quando não há escolha salva', () => {
		expect(resolveLang(null, 'pt-BR')).toBe('pt');
		expect(resolveLang(null, 'en-US')).toBe('en');
	});

	it('cai no inglês como padrão quando o idioma é desconhecido', () => {
		expect(resolveLang(null, undefined)).toBe('en');
		expect(resolveLang('xx', 'fr-FR')).toBe('en');
	});
});

describe('dicionário i18n', () => {
	it('tem as mesmas chaves em EN e PT', () => {
		expect(Object.keys(i18n.en).sort()).toEqual(Object.keys(i18n.pt).sort());
	});

	it('não tem valores vazios', () => {
		for (const lang of ['en', 'pt'] as const) {
			for (const value of Object.values(i18n[lang])) {
				expect(value.trim().length).toBeGreaterThan(0);
			}
		}
	});
});
