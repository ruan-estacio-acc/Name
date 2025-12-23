# Mapa de Fullbleed (Outer vs Inner) — HomePgcontainers

Este documento descreve **como está sendo aplicada a técnica “fullbleed”** (background/área visual indo até as bordas da viewport) na página Home, dentro de `src/HomePgcontainers/`.

A base da técnica aqui (na maioria dos casos) é:

- **Outer (fullbleed)**: um container com `width: 100%` (geralmente `position: relative`) que “toma” a largura toda e recebe o `background` **ou** hospeda uma camada `*Background` absoluta cobrindo tudo.
- **Inner (conteúdo limitado)**: um container centralizado com `max-width: 1440px` + `margin: 0 auto` + `width: 100%` e `padding-inline` responsivo.

> Observação importante: neste projeto, o fullbleed **não** está usando o padrão clássico `width: 100vw` + `margin-left: calc(50% - 50vw)`.
> O padrão é “**outer 100% + inner max-width**” e, quando necessário, uma camada absoluta `*Background` dentro do outer.

---

## PromoBar (`PromoBar`)

Arquivos:
- `src/HomePgcontainers/PromoBar/PromoBar.styles.js`
- `src/HomePgcontainers/PromoBar/PromoBar.jsx`

**Outer (fullbleed):**
- `DivContainer`
  - `width: 100%`
  - `background-color: #000`
  - `position: sticky; top: 0; left: 0` (barra fica colada no topo)
  - `display: flex; justify-content: center`

**Inner (conteúdo):**
- `PromoBarInner`
  - `max-width: 1440px; width: 100%`
  - `padding-inline: clamp(24px, 4vw, 96px)`

**Técnica usada:**
- Background fullbleed aplicado diretamente no outer (`DivContainer`), e o conteúdo centralizado via inner com `max-width`.

---

## Header (`Header`)

Arquivos:
- `src/HomePgcontainers/Header/Header.styles.js`
- `src/HomePgcontainers/Header/Header.jsx`

**Outer (fullbleed):**
- `HeaderContainer`
  - `width: 100%`
  - `background-color: #fff`
  - `display: flex; justify-content: center`

**Inner (conteúdo):**
- `HeaderWrapper`
  - `max-width: 1440px; width: 100%`
  - `margin: 0 auto`
  - `padding-inline: clamp(24px, 4vw, 96px)`

**Técnica usada:**
- Fullbleed “simples”: outer 100% com background e inner centralizado.

---

## HeroBanner (`HeroBanner`)

Arquivos:
- `src/HomePgcontainers/HeroBanner/HeroBanner.styles.js`
- `src/HomePgcontainers/HeroBanner/HeroBanner.jsx`

**Outer (fullbleed):**
- `HeroBannerWrapper`
  - `position: relative`
  - `display: flex; justify-content: center`
  - `min-height: 663px`

**Camada de background (fullbleed visual):**
- `HeroBannerBackground`
  - `position: absolute; inset: 0`
  - `background-color: #F2F0F1`

**Inner (conteúdo limitado):**
- `HeroBannerContent`
  - `max-width: 1440px; width: 100%`
  - `margin: 0 auto`
  - layout em grid (`grid-template-columns: 1fr 1fr`)

**Técnica usada:**
- “Background layer”: o background é um elemento irmão (`HeroBannerBackground`) posicionado absoluto cobrindo o outer.
- O conteúdo fica acima por `z-index` (o wrapper e o content estão com `z-index: 1`).

---

## BrandBar (`BrandBar`)

Arquivos:
- `src/HomePgcontainers/BrandBar/BrandBar.styles.js`
- `src/HomePgcontainers/BrandBar/BrandBar.jsx`

**Outer (fullbleed):**
- `BrandBarWrapper`
  - `position: relative`
  - `width: 100%`

**Camada de background (fullbleed visual):**
- `BrandBarBackground`
  - `position: absolute; inset: 0`
  - `background-color: #000`

**Inner (conteúdo limitado):**
- `BrandBarContent`
  - `max-width: 1440px; width: 100%`
  - `margin: 0 auto`
  - `padding-inline: clamp(24px, 4vw, 96px)`

**Técnica usada:**
- Mesmo padrão do HeroBanner: camada de background absoluta no outer + conteúdo em um inner com `max-width`.

---

## BrowseBar (`BrowseBar`)

Arquivos:
- `src/HomePgcontainers/BrowseBar/BrowseBar.styles.js`
- `src/HomePgcontainers/BrowseBar/BrowseBar.jsx`

**Outer (fullbleed):**
- `BrowseBarContainer`
  - `width: 100%`
  - `background-color: #fff`
  - `position: relative`

**Inner (conteúdo limitado):**
- `BrowseBarWrapper`
  - `max-width: 1440px; width: 100%`
  - `margin: 0 auto`
  - `background-color: #f0f0f0`
  - `border-radius: 40px`
  - `padding: 65px clamp(24px, 4vw, 96px)`

**Sobre `BrowseBarBackground`:**
- Existe um `BrowseBarBackground` com `position: absolute; inset: 0; background-color: transparent; z-index: -1`.
- Na prática, ele **não participa do visual** (background transparente e z-index negativo), então o “fullbleed” da seção é apenas o branco do `BrowseBarContainer`.

**Técnica usada:**
- Outer full width (branco) + inner “card” cinza limitado por `max-width`.

---

## NewArrivals (`NewArrivalsSection`)

Arquivos:
- `src/HomePgcontainers/NewArrivals/NewArrivalsSection.styles.js`
- `src/HomePgcontainers/NewArrivals/NewArrivalsSection.jsx`

**Outer (fullbleed):**
- `NewArrivalsContainer`
  - `width: 100%`
  - `position: relative`
  - `background-color: #fff`
  - `padding-bottom` configurável via props

**Inner (conteúdo limitado):**
- `NewArrivalsWrapper`
  - `max-width: 1440px; width: 100%`
  - `margin: 0 auto`
  - `padding-inline: clamp(24px, 4vw, 96px)`

**Sobre `NewArrivalsBackground`:**
- `NewArrivalsBackground` é `position: absolute; inset: 0; z-index: -1` e é renderizado *dentro* do `NewArrivalsWrapper`.
- Como o wrapper tem `max-width`, essa camada é **um “background do inner”**, não do fullbleed.
- O fullbleed real (branco) já está garantido pelo `NewArrivalsContainer`.

**Técnica usada:**
- Outer full width (background no container) + inner max-width.

---

## ReviewSection (`ReviewSection`)

Arquivos:
- `src/HomePgcontainers/ReviewSection/ReviewSection.styles.js`
- `src/HomePgcontainers/ReviewSection/ReviewSection.jsx`

**Outer (fullbleed):**
- `ReviewContainer`
  - `width: 100%`
  - `position: relative`
  - `background-color: #fff`

**Camada de background (fullbleed visual):**
- `ReviewBackground`
  - `position: absolute; inset: 0`
  - `background-color: #fff`

**Inner (conteúdo limitado):**
- `ReviewWrapper`
  - `max-width: 1440px; width: 100%`
  - `margin: 0 auto`
  - `padding: 0 clamp(24px, 4vw, 96px) 60px`

**Detalhe extra (não é fullbleed, é responsividade do carrossel):**
- `ReviewViewport` usa variáveis CSS para calcular largura de card:
  - `--wrapper-max: min(1440px, calc(100vw - 32px))`
  - `max-width: min(1440px, calc(100vw - 32px))`

**Técnica usada:**
- Outer relativo + camada absoluta de background cobrindo o outer + inner centralizado.

---

## Footer (`Footer`)

Arquivos:
- `src/HomePgcontainers/Footer/Footer.styles.js`
- `src/HomePgcontainers/Footer/Footer.jsx`

**Outer (fullbleed):**
- `FooterContainer`
  - `width: 100%`
  - `position: relative`
  - `overflow: hidden`

**Outer auxiliar (fullbleed para layout/centralização):**
- `FooterWrapper`
  - `width: 100%`
  - `display: flex; justify-content: center; align-items: center`

**Inner (conteúdo limitado):**
- Atualmente o inner está sendo feito via **inline style** no JSX:
  - `<div style={{ width: '100%', maxWidth: '1440px', paddingInline: 'clamp(24px, 4vw, 96px)' ... }}>`

**Overlay (CTA absoluto centralizado):**
- `FooterCtaBar`
  - `position: absolute`
  - centraliza via `left: 50%` + `transform: translateX(-50%) translateY(-50%)`
  - `max-width: 1440px; width: 100%`

**Como o layout evita “sobreposição” do CTA absoluto:**
- O componente mede a altura do CTA (`ctaRef.current.offsetHeight`) e seta:
  - `--cta-half` no `document.documentElement`
  - alturas em `GlobalSpacer`/`CtaSpacer`/`innerTopRef`
- `GlobalSpacer` usa `height: var(--cta-half, 0px)` para reservar espaço.

**Técnica usada:**
- Fullbleed no container + inner centralizado (inline) + CTA absoluto centralizado por `left: 50%` + `transform` + spacers dinâmicos.

---

## Resumo rápido do padrão do projeto

- Padrão dominante: **outer `width: 100%`** + **inner `max-width: 1440px`**.
- Quando precisa “pintar” o fundo até a borda sem afetar o inner: `*Background` absoluto com `inset: 0` dentro de um outer `position: relative`.
- Não há (até aqui) uso de `100vw + calc(50% - 50vw)`.
