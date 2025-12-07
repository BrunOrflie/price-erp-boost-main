# Price Consultoria e Tecnologia

Site institucional da Price Consultoria e Tecnologia - Especialistas em ERP.

## Sobre o Projeto

Site desenvolvido para comunicar os serviços e diferenciais da Price Consultoria, empresa com 11 anos de experiência em gestão de ERPs para Agronegócio e Indústria.

## Tecnologias Utilizadas

- **Vite** - Build tool e dev server
- **React** - Biblioteca para interfaces
- **TypeScript** - JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI
- **React Router** - Navegação entre páginas

## Como Executar Localmente

### Pré-requisitos

- Node.js 18+ ou Bun
- Git

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre na pasta do projeto
cd price

# Instale as dependências
npm install
# ou
bun install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
bun dev
```

O site estará disponível em `http://localhost:8080`

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas do site
│   ├── services/   # Páginas de serviços
│   └── segments/   # Páginas de segmentos
├── hooks/          # Custom hooks
└── lib/            # Utilitários e configurações
```

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## Deploy

O projeto está configurado para deploy automático via GitHub Pages ou plataformas como Vercel/Netlify.

## Licença

© 2025 Price Consultoria e Tecnologia. Todos os direitos reservados.
