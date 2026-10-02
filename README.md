<div align="center">

  <img src="assets/images/Aquarios-novoLogotipo.png" width="120" alt="Logotipo Aquarius Academia" />

  <h1>Aquarius Academia</h1>
  <p><strong>Musculação · Natação · Hidroginástica</strong></p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>

  <p>
    <img src="https://img.shields.io/badge/status-em%20produção-brightgreen?style=flat-square" alt="Status" />
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/versão-1.0.0-informational?style=flat-square" alt="Versão" />
    <img src="https://img.shields.io/badge/Google%20Reviews-4.0%20★-yellow?style=flat-square" alt="Nota Google" />
  </p>

  <p>
    <a href="https://github.com/Amoriams/aquarios-academia">📦 Repositório</a> ·
    <a href="#-funcionalidades">⚡ Funcionalidades</a> ·
    <a href="#-como-visualizar">💻 Como Visualizar</a> ·
    <a href="#-estrutura-de-arquivos">📁 Estrutura</a> ·
    <a href="#-segurança">🔒 Segurança</a>
  </p>

</div>

---

## 📋 Sobre o Projeto

Site oficial da **Aquarius Academia**, localizada na **Vila das Belezas, São Paulo/SP**. Desenvolvido com foco em performance, SEO e uma identidade visual dark premium que combina força atlética com energia aquática.

O site é totalmente **client-side** — sem backend, sem banco de dados, sem dependências pesadas. Rápido, seguro e fácil de hospedar em qualquer plataforma estática (GitHub Pages, Netlify, Vercel).

> **Objetivo principal:** apresentar os serviços da academia, gerar confiança através de prova social e converter visitantes em alunos via WhatsApp.

---

## 🎯 Informações da Academia

| Campo | Informação |
|---|---|
| **Nome** | Aquarius Academia |
| **Endereço** | R. Dr. André Brenha Ribeiro, 13 — Vila das Belezas, São Paulo - SP |
| **CEP** | 05841-100 |
| **Telefone / WhatsApp** | (11) 5512-2020 |
| **Horário (Seg–Sex)** | 06:00 às 22:00 |
| **Horário (Sábado)** | 08:00 às 17:00 |
| **Instagram** | [@academiaaquarius__](https://www.instagram.com/academiaaquarius__/) |
| **Facebook** | [falecomaquarius](https://www.facebook.com/falecomaquarius/?locale=pt_BR) |
| **Wellhub** | [Parceiro Wellhub](https://wellhub.com/pt-br/search/partners/aquarius-academia-vila-das-belezas/) |

---

## 🎨 Identidade Visual

| Elemento | Hexadecimal | Descrição |
|---|---|---|
| **Background Base** | `#070A10` | Escuro profundo com subtom azul-marinho |
| **Card / Superfície** | `#0D131F` | Glassmorphism dark |
| **Azul Logo** | `#1652D8` | Azul royal extraído do logotipo oficial |
| **Ciano / Aqua** | `#06B6D4` | Destaque aquático |
| **Vermelho Força** | `#EF4444` | Musculação e energia atlética |
| **WhatsApp Green** | `#25D366` | CTAs de conversão |

---

## ⚡ Funcionalidades

- 🟢 **Status em Tempo Real** — calcula automaticamente se a academia está aberta ou fechada com base no horário de Brasília (UTC-3)
- 💬 **Formulário WhatsApp Inteligente** — compila Nome, Telefone, Modalidade e Objetivo em mensagem formatada com emojis para o WhatsApp oficial `(11) 5512-2020`
- 🎞️ **Scroll Reveal Animations** — animações de entrada fluidas com `IntersectionObserver`
- 📸 **Lazy Loading com Blur-Up** — imagens carregadas sob demanda para máxima performance
- 🔢 **Contadores Dinâmicos** — incremento animado das estatísticas (321+ avaliações, 4,0★, 4.578 seguidores)
- 📱 **Menu Mobile Gaveta** — navegação mobile fluida com fechamento por clique externo ou tecla `ESC`
- 🗺️ **Mapa Interativo** — Google Maps embed dark-themed com a localização exata da unidade

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **HTML5 Semântico** | Estrutura otimizada para SEO e acessibilidade (`alt`, `aria-label`, `meta tags`) |
| **CSS3 Customizado** | Glassmorphism, animações, variáveis CSS, scroll customizado |
| **Tailwind CSS (CDN)** | Classes utilitárias com configuração de tema personalizada via `tailwind.config` |
| **Vanilla JavaScript** | 100% nativo — sem React, Vue ou dependências externas |

---

## 📁 Estrutura de Arquivos

```
aquarios-academia/
│
├── index.html               # Página principal (~1.345 linhas, 13 seções)
├── .gitignore               # Exclusões do versionamento
├── README.md                # Documentação do projeto
│
├── css/
│   └── style.css            # Estilos customizados, glassmorphism e animações
│
├── js/
│   └── script.js            # Lógica: WhatsApp, Scroll, Lazyload, Contadores, Status
│
└── assets/
    └── images/              # Logotipo e fotografias da estrutura
        ├── Aquarios-novoLogotipo.png
        ├── natacao.jpg
        ├── musculacao.jpg
        ├── hidroginastica.jpg
        ├── equipamentos.jpg
        ├── pesos.jpg
        └── imagem03.jpg
```

---

## 💻 Como Visualizar

### Opção 1 — Abrir direto no navegador
Basta fazer o download e abrir o arquivo `index.html` no seu navegador.

### Opção 2 — Servidor local (recomendado)

**Com Python:**
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

**Com Node.js (npx):**
```bash
npx serve .
# Acesse: http://localhost:3000
```

---

## 🌐 Deploy / Publicação

Por ser um projeto 100% estático, pode ser publicado gratuitamente em:

| Plataforma | Instruções |
|---|---|
| **GitHub Pages** | `Settings → Pages → Branch: main → /root` |
| **Netlify** | Arraste a pasta para [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel --prod` ou conecte via dashboard |

---

## 🔒 Segurança

> ✅ **Auditoria de segurança:** Nenhuma chave privada, token, credencial ou segredo encontrado.

| Item auditado | Status |
|---|---|
| API keys / tokens privados | ✅ Nenhum encontrado |
| Credenciais de banco de dados | ✅ Não aplicável (projeto estático) |
| Número do WhatsApp `551155122020` | ✅ Informação pública do negócio |
| Arquivos `.env` no repositório | ✅ Bloqueados pelo `.gitignore` |
| Arquivos SPEC / rascunhos internos | ✅ Bloqueados pelo `.gitignore` |

> ⚠️ O número de WhatsApp da academia está no `js/script.js` pois trata-se de informação pública do negócio, não de uma chave de API ou segredo.

---

## 📍 Localização

**Aquarius Academia**
R. Dr. André Brenha Ribeiro, 13 — Vila das Belezas, São Paulo/SP
CEP: 05841-100

📞 (11) 5512-2020
📸 [@academiaaquarius__](https://www.instagram.com/academiaaquarius__/)

---

## 📄 Licença

Este projeto foi desenvolvido para a **Aquarius Academia**. Todos os direitos sobre as imagens, logotipo e identidade visual pertencem à academia. O código-fonte está disponível sob a licença **MIT**.

---

<div align="center">
  <p>Desenvolvido com 💙 por <a href="https://github.com/Amoriams"><strong>Julia Amorim</strong></a></p>
  <p><sub>Stack: HTML5 · CSS3 · Tailwind CSS · Vanilla JavaScript</sub></p>
</div>
