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
  </p>

  <p>
    <a href="https://github.com/Amoriams/aquarios-academia">📦 Repositório</a> ·
    <a href="#-funcionalidades">⚡ Funcionalidades</a> ·
    <a href="#-como-visualizar">💻 Como Visualizar</a> ·
    <a href="#-estrutura-de-arquivos">📁 Estrutura</a>
  </p>

</div>

---

## 📋 Sobre o Projeto

Site oficial da **Aquarius Academia**, localizada na **Vila das Belezas, São Paulo/SP**. Desenvolvido com foco em performance, SEO e uma identidade visual dark premium que combina força atlética com energia aquática.

O site é totalmente **client-side** — sem backend, sem banco de dados, sem dependências pesadas. Rápido, seguro e fácil de hospedar em qualquer plataforma estática (GitHub Pages, Netlify, Vercel).

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

- 🟢 **Status em Tempo Real** — calcula automaticamente se a academia está aberta ou fechada com base no horário atual do usuário
- 💬 **Formulário WhatsApp Inteligente** — compila Nome, Telefone, Modalidade e Objetivo em uma mensagem formatada com emojis e envia diretamente para o WhatsApp oficial `(11) 5512-2020`
- 🎞️ **Scroll Reveal Animations** — animações de entrada fluidas com `IntersectionObserver`
- 📸 **Lazy Loading com Blur-Up** — imagens carregadas sob demanda para máxima performance
- 🔢 **Contadores Dinâmicos** — incremento animado das estatísticas (321+ avaliações, 4,0★, 4.578 seguidores)
- 📱 **Menu Mobile Gaveta** — navegação mobile fluida com fechamento por clique externo ou tecla `ESC`
- 🗺️ **Mapa Interativo** — Google Maps embed com a localização exata da unidade

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
├── index.html               # Página principal (1 arquivo, ~1.350 linhas)
├── .gitignore               # Exclusões do versionamento
├── README.md                # Documentação do projeto
│
├── css/
│   └── style.css            # Estilos customizados, glassmorphism e animações
│
├── js/
│   └── script.js            # Lógica: WhatsApp, Scroll, Lazyload, Contadores
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

## 🔒 Segurança

> ⚠️ O número de WhatsApp da academia (`551155122020`) está configurado diretamente no arquivo `js/script.js`, pois trata-se de informação pública do negócio, não de uma chave de API ou segredo.
>
> Não há credenciais, tokens ou chaves privadas em nenhum arquivo deste repositório.

---

## 📍 Localização

**Aquarius Academia**
R. Dr. André Brenha Ribeiro, 13 — Vila das Belezas, São Paulo/SP
CEP: 05841-100

📞 (11) 5512-2020
📸 [@academiaaquarius__](https://www.instagram.com/academiaaquarius__/)

---

## 📄 Licença

Este projeto foi desenvolvido para a **Aquarius Academia**. Todos os direitos sobre as imagens, logotipo e identidade visual pertencem à academia.

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/Amoriams"><strong>Julia Amorim</strong></a></p>
</div>
