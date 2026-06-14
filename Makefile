.DEFAULT_GOAL := help
.PHONY: help install dev build test test-coverage lint lint-fix format

help: ## Lista todos os comandos disponíveis
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

install: ## Instala as dependências (pnpm install)
	pnpm install

dev: ## Inicia o servidor de desenvolvimento (pnpm dev)
	pnpm dev

build: ## Gera o build de produção (pnpm build)
	pnpm build

test: ## Roda os testes (Vitest)
	pnpm exec vitest run

test-coverage: ## Roda os testes com relatório de cobertura
	pnpm exec vitest run --coverage

lint: ## Verifica formatação e lint (Biome)
	pnpm exec biome check .

lint-fix: ## Corrige formatação e lint automaticamente (Biome)
	pnpm exec biome check --write .

format: ## Formata o código (Biome)
	pnpm exec biome format --write .
