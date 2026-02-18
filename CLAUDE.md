# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Komercia e-commerce store templates built with Nuxt 2.17 and Vue 2. This is a multi-template system where each store can use a different template (5-17, 99) that determines the visual design. Stores are rendered dynamically based on domain/subdomain with data fetched from the Komercia API.

## Commands

```bash
# Development
npm run dev              # Start dev server on port 3000
npm run devplus          # Dev server with increased memory (12GB)
npm run devIp            # Dev server accessible via network IP (port 3333)

# Production
npm run build            # Build for production
npm run start            # Start production server (8GB memory limit)
npm run deploy           # Deploy with PM2
```

## Architecture

### Template System
- Templates are numbered 5-17 plus 99 (WhatsApp catalog)
- Each template has its own folder under `pages/template{N}/` and `components/template{N}/`
- Template selection happens via `$store.state.template` which drives dynamic component resolution
- The `pages/index.vue` maps template numbers to their corresponding components

### Dynamic Component Loading
- `layouts/default.vue` dynamically loads headers/footers based on template number using component maps
- Headers: `components/headers/k{N}_header/`
- Footers: `components/footers/k{N}_footer/`
- Uses Vue's dynamic `<component :is="">` pattern throughout

### Vuex Store (`store/index.js`)
- Central store managing: cart (`productsCart`), store data (`dataStore`), template settings per template number (`settingByTemplate{N}`)
- API endpoints configured via state: `urlKomercia`, `urlKomerciaV3`, `urlAWSsettings`, `urlNodeSettings`
- Store data is fetched server-side via `nuxtServerInit` based on request hostname

### Key Directories
- `mixins/` - Reusable Vue mixins (product filtering, currency formatting, mobile detection, SEO)
- `plugins/` - Nuxt plugins for analytics (GA, GTM, Facebook Pixel), UI libraries (Element UI, TipTap), i18n
- `server-middleware/` - Cache-Control headers, WAPI redirect rules
- `components/_commonComponent/` - Shared components across templates (product sliders, zoom, skeleton loaders)
- `i18n/` - Internationalization strings

### Styling
- Tailwind CSS 3.4 with extensive custom utilities in `tailwind.config.js`
- Element UI components with theme from `element-ui/lib/theme-chalk/index.css`
- Custom percentage-based width/height utilities (e.g., `w-2/5` for 25%, `h-5/0` for 50%)
- Custom pixel values 1-100px for width, height, margin, padding, font-size, etc.

## Code Style

- Prettier: single quotes, no semicolons, ES5 trailing commas
- ESLint: Vue recommended rules, no console.log in production
- Vue SFC html-self-closing: void tags always self-close, normal tags never
