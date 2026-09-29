import {
  BarChart3,
  Cog,
  Landmark,
  Scale,
  ShieldAlert,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const servicios = [
  {
    id: "profesionalizacion",
    icon: Users,
    title: "Profesionalización y Recambio Generacional",
    shortTitle: "Profesionalización y Recambio Generacional",
    lead: "De la intuición a la estructura: asegurar la continuidad y el crecimiento de su legado.",
    items: [
      { k: "Formalización de la gestión", v: "Transformamos procesos improvisados en un modelo de negocio institucional, combinando tecnología aplicada, finanzas sanas y claridad estratégica." },
      { k: "Gobierno corporativo", v: "Diseñamos estructuras claras y separamos roles clave para que delegar la operación sea seguro, sostenible y eficiente." },
      { k: "Transición y sucesión", v: "Guiamos el recambio generacional mediante mentoría y formación del nuevo talento directivo, garantizando que el negocio trascienda sin perder estabilidad." },
    ],
  },
  {
    id: "expansion",
    icon: TrendingUp,
    title: "Proyectos de Expansión",
    shortTitle: "Proyectos de Expansión",
    lead: "Modelos escalables para conquistar nuevos mercados.",
    items: [
      { k: "Crecimiento estructurado", v: "Diseñamos e implementamos modelos financieros y organizacionales aptos para el desarrollo de nuevas líneas de negocio o mercados geográficos." },
      { k: "Estrategia en Startups y M&A", v: "Ofrecemos asesoramiento integral y acompañamiento estratégico tanto en el lanzamiento de startups como en procesos de fusiones y adquisiciones (Take-Overs)." },
    ],
  },
  {
    id: "reingenieria",
    icon: Cog,
    title: "Reingeniería de Procesos y Estructuras",
    shortTitle: "Reingeniería de Procesos y Estructuras",
    lead: "Optimización y modernización de áreas clave.",
    items: [
      { k: "Eficiencia con Inteligencia Artificial", v: "Rediseñamos procesos e implementamos flujos de trabajo híbridos, integrando agentes de IA según la madurez digital de la empresa para maximizar la productividad." },
      { k: "Estructura a medida", v: "Reestructuramos, mejoramos o creamos nuevas áreas funcionales alineadas con los objetivos actuales del negocio." },
    ],
  },
  {
    id: "costos",
    icon: Wallet,
    title: "Reducción de Costos y Eficiencia del Capital de Trabajo",
    shortTitle: "Reducción de Costos y Capital de Trabajo",
    lead: "Maximizar la rentabilidad protegiendo su liquidez.",
    items: [
      { k: "Rentabilidad inteligente", v: "Analizamos a fondo los costos, precios y márgenes por producto o unidad de negocio para identificar fugas de dinero." },
      { k: "Eficiencia sostenible", v: "Reducimos costos mediante la digitalización y automatización de tareas. Alineamos las decisiones operativas con la gestión del capital de trabajo para multiplicar resultados sin generar tensiones de caja." },
    ],
  },
  {
    id: "riesgos",
    icon: ShieldAlert,
    title: "Análisis de Riesgos y Auditoría Interna",
    shortTitle: "Análisis de Riesgos y Auditoría Interna",
    lead: "Blindamos el valor de su compañía ante un entorno incierto.",
    items: [
      { k: "Gestión de riesgos", v: "Diagnosticamos, mapeamos y monitoreamos amenazas potenciales, transformando la prevención en resiliencia y ventaja competitiva." },
      { k: "Auditoría interna estratégica", v: "Implementamos el área de auditoría como un aliado clave del negocio, utilizando enfoques ágiles y análisis continuo para asegurar el cumplimiento y protección de los activos." },
    ],
  },
  {
    id: "contabilidad",
    icon: BarChart3,
    title: "Contabilidad Estratégica y Reportes de Gestión",
    shortTitle: "Contabilidad Estratégica y Reportes",
    lead: "Usar los números para escribir el futuro, no para leer el pasado.",
    items: [
      { k: "Tableros de control (KPIs)", v: "Diseñamos reportes de gestión gerencial y herramientas visuales para que la toma de decisiones se base en datos en tiempo real." },
      { k: "Soporte continuo", v: "Brindamos asesoramiento administrativo y contable constante, convirtiendo los datos regulatorios en insights de negocio." },
    ],
  },
  {
    id: "advisory-board",
    icon: Landmark,
    title: "Advisory Board (Consejo Asesor)",
    shortTitle: "Advisory Board (Consejo Asesor)",
    lead: "Una mirada externa experta para mantener el rumbo.",
    items: [
      { k: "Disciplina ejecutiva", v: "Participamos activamente en sus revisiones estratégicas, aportando una visión objetiva y corporativa." },
      { k: "Mentoría y control", v: "Monitoreamos los KPIs críticos del negocio y brindamos mentoría a los líderes de la organización para asegurar el cumplimiento de metas." },
    ],
  },
  {
    id: "procesos-concursales",
    icon: Scale,
    title: "Gestión Integral y Acompañamiento Operativo en Procesos Concursales",
    shortTitle: "Procesos Concursales",
    lead: "También contamos con experiencia para acompañar empresas que atraviesan procesos concursales o de reestructuración, trabajando de manera coordinada con la Dirección y sus asesores legales.",
    items: [
      { k: "Objetivo", v: "Ordenar, validar y fortalecer la información administrativa y contable, mejorar el control de gestión, responder a los requerimientos propios del proceso y acompañar el seguimiento de la operación y la generación de fondos." },
      { k: "Más allá del proceso", v: "El foco está puesto no solamente en atravesar el proceso concursal, sino también en generar una organización más ordenada, eficiente y sustentable." },
    ],
  },
] as const;