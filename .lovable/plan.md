## Enlace Estratégico — Sitio Profesional (Multi-ruta)

Sitio premium en español para consultoría boutique. Estética navy `#0D1B3E` + bronce `#B8924A`, serif Playfair Display + sans Inter, ilustraciones SVG line-art tipo blueprint arquitectónico.

### Arquitectura de rutas

Cada sección como ruta propia (mejor SEO, head() único). Layout compartido vía `__root.tsx` (Navbar + Outlet + Footer).

```
src/routes/
  __root.tsx          # actualizar: Navbar global, Footer, fuentes Google
  index.tsx           # Home: Hero + Problema/Solución + CTA hacia secciones
  enfoque.tsx         # Diferencial (tabla) + Pilares de valor
  servicios.tsx       # 3 grupos de servicios
  metodologia.tsx     # Estrategia / Ejecución / Personas
  contacto.tsx        # Form mailto + datos de contacto
```

Navegación con `<Link>` de `@tanstack/react-router`, `activeProps` para resaltar ruta activa. Cada ruta define `head()` con title, description, og:title, og:description en español.

### Sistema de diseño (`src/styles.css`)

Tokens semánticos en `oklch` (sin clases hex en componentes):
- `--background` navy profundo, `--foreground` blanco hueso
- `--primary` navy, `--primary-foreground` blanco
- `--accent` bronce, `--accent-foreground` navy
- `--card` navy ligeramente más claro, `--border` bronce 20%
- `--muted-foreground` gris azulado claro
- `--font-serif: 'Playfair Display'`, `--font-sans: 'Inter'`
- `--gradient-gold`, `--shadow-elegant`, `--shadow-gold-glow`
- Utilidades: `.font-serif`, animación `fade-in-up` y clase `.reveal` activada por IntersectionObserver

Modo oscuro permanente (la marca es siempre dark). Fuentes cargadas vía `<link>` en `head()` del root.

### Componentes compartidos

```
src/components/site/
  Navbar.tsx              # sticky, backdrop-blur, logo serif + nav links + CTA
  Footer.tsx              # logo, email, links rápidos, copyright
  BridgeBlueprint.tsx     # SVG line-art reutilizable (variantes: hero/divider/bg)
  SectionHeading.tsx      # eyebrow bronce + título serif + línea decorativa
  Reveal.tsx              # wrapper con IntersectionObserver para fade-in
src/hooks/useReveal.ts
```

`BridgeBlueprint`: SVG con líneas finas bronce sobre transparente — pilares verticales, arco/cables tipo puente colgante, grid de fondo punteado, marcas de cota estilo plano técnico. Parametrizable en tamaño y opacidad.

### Páginas — contenido específico

**index.tsx (Home)**
- Hero full-viewport: BridgeBlueprint a la derecha (opacity 10–15%), H1 serif "Las ideas no faltan. La ejecución, sí.", subtítulo, CTA bronce "Conocé nuestro enfoque" → `/enfoque`.
- Bloque Problema/Solución: grid 2 col (stack mobile), íconos `AlertTriangle` y `CheckCircle2` en bronce.
- CTA final hacia `/servicios`.

**enfoque.tsx**
- Sección Diferencial: tabla 4 filas × 2 columnas (Equipo, Entregable, Legado, Enfoque). Columna derecha destacada con borde bronce, fondo card y texto en accent-foreground.
- Sección Pilares: grid 4 cards (1/2/4 responsive), cada una con icono lucide bronce (`Target`, `Settings2`, `Handshake`, `Eye`), título serif y descripción.

**servicios.tsx**
- Tres subsecciones con encabezado serif: "Transformación y Crecimiento" (3 cards), "Eficiencia y Rescate Corporativo" (2 cards), "Gobernanza y Control" (3 cards).
- Cards con icono lucide bronce arriba, título y bullet/descripción.

**metodologia.tsx**
- Trío de "engranajes" SVG conectados horizontalmente (Estrategia / Ejecución / Personas) con líneas de unión bronce.
- 3 cards bajo el visual con descripción de cada pilar.
- Frase de cierre centrada en serif italic.

**contacto.tsx**
- Encabezado serif: "Construyendo el Puente hacia la Excelencia Operativa".
- Botón bronce con `mailto:enlace.estrategico.ar@gmail.com`.
- Form (Nombre, Empresa, Email, Mensaje) con `react-hook-form` + `zod`. Submit construye `mailto:` con cuerpo prellenado y abre el cliente de email; toast de confirmación vía sonner. Sin backend.

### Interacción

- Navbar sticky con borde bronce inferior, blur de fondo, logo "ENLACE ESTRATÉGICO / Consultores Especializados" (serif + caps spacing), links con underline animado bronce, ruta activa en bronce.
- `scroll-behavior: smooth` global; scroll restoration ya activado en router.
- `Reveal` aplica `animate-fade-in-up` cuando el bloque entra en viewport (sin librerías extra).
- Hover sutil en cards: leve translate-y, borde bronce, sombra dorada.
- Mobile: navbar colapsa a `Sheet` (shadcn) con los mismos links.

### SEO por ruta

Cada `head()` con:
- title español específico (ej. "Servicios — Enlace Estratégico")
- description, og:title, og:description, og:type=website, twitter:card=summary
- root mantiene defaults amplios + lang="es" en `<html>`.

### Fuera de alcance

- Sin Lovable Cloud (form usa mailto).
- Sin imágenes raster ni stock — solo SVG line-art y lucide icons.
- Sin modo claro (la marca es dark by design).
