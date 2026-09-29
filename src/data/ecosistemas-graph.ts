// Catálogo del grafo de public/ecosistemas-grafo.html (ids deben coincidir).
export type GraphEntry = { id: string; kind: string; parent?: string; label: string; desc?: string };
export const graphCatalog: GraphEntry[] = [
  {
    "id": "s1",
    "kind": "servicio",
    "label": "Profesionalización y Recambio Generacional",
    "desc": "De la intuición a la estructura: asegurar la continuidad y el crecimiento de su legado."
  },
  {
    "id": "s1i0",
    "kind": "línea de trabajo",
    "parent": "s1",
    "label": "Formalización de la gestión",
    "desc": "Transformamos procesos improvisados en un modelo de negocio institucional, combinando tecnología aplicada, finanzas sanas y claridad estratégica."
  },
  {
    "id": "s1i1",
    "kind": "línea de trabajo",
    "parent": "s1",
    "label": "Gobierno corporativo",
    "desc": "Diseñamos estructuras claras y separamos roles clave para que delegar la operación sea seguro, sostenible y eficiente."
  },
  {
    "id": "s1i2",
    "kind": "línea de trabajo",
    "parent": "s1",
    "label": "Transición y sucesión",
    "desc": "Guiamos el recambio generacional mediante mentoría y formación del nuevo talento directivo, garantizando que el negocio trascienda sin perder estabilidad."
  },
  {
    "id": "s2",
    "kind": "servicio",
    "label": "Proyectos de Expansión",
    "desc": "Modelos escalables para conquistar nuevos mercados."
  },
  {
    "id": "s2i0",
    "kind": "línea de trabajo",
    "parent": "s2",
    "label": "Crecimiento estructurado",
    "desc": "Diseñamos e implementamos modelos financieros y organizacionales aptos para el desarrollo de nuevas líneas de negocio o mercados geográficos."
  },
  {
    "id": "s2i1",
    "kind": "línea de trabajo",
    "parent": "s2",
    "label": "Estrategia en Startups y M&A",
    "desc": "Ofrecemos asesoramiento integral y acompañamiento estratégico tanto en el lanzamiento de startups como en procesos de fusiones y adquisiciones (Take-Overs)."
  },
  {
    "id": "s3",
    "kind": "servicio",
    "label": "Reingeniería de Procesos y Estructuras",
    "desc": "Optimización y modernización de áreas clave."
  },
  {
    "id": "s3i0",
    "kind": "línea de trabajo",
    "parent": "s3",
    "label": "Eficiencia con Inteligencia Artificial",
    "desc": "Rediseñamos procesos e implementamos flujos de trabajo híbridos, integrando agentes de IA según la madurez digital de la empresa para maximizar la productividad."
  },
  {
    "id": "s3i1",
    "kind": "línea de trabajo",
    "parent": "s3",
    "label": "Estructura a medida",
    "desc": "Reestructuramos, mejoramos o creamos nuevas áreas funcionales alineadas con los objetivos actuales del negocio."
  },
  {
    "id": "s4",
    "kind": "servicio",
    "label": "Reducción de Costos y Eficiencia del Capital de Trabajo",
    "desc": "Maximizar la rentabilidad protegiendo su liquidez."
  },
  {
    "id": "s4i0",
    "kind": "línea de trabajo",
    "parent": "s4",
    "label": "Rentabilidad inteligente",
    "desc": "Analizamos a fondo los costos, precios y márgenes por producto o unidad de negocio para identificar fugas de dinero."
  },
  {
    "id": "s4i1",
    "kind": "línea de trabajo",
    "parent": "s4",
    "label": "Eficiencia sostenible",
    "desc": "Reducimos costos mediante la digitalización y automatización de tareas. Alineamos las decisiones operativas con la gestión del capital de trabajo para multiplicar resultados sin generar tensiones de caja."
  },
  {
    "id": "s5",
    "kind": "servicio",
    "label": "Análisis de Riesgos y Auditoría Interna",
    "desc": "Blindamos el valor de su compañía ante un entorno incierto."
  },
  {
    "id": "s5i0",
    "kind": "línea de trabajo",
    "parent": "s5",
    "label": "Gestión de riesgos",
    "desc": "Diagnosticamos, mapeamos y monitoreamos amenazas potenciales, transformando la prevención en resiliencia y ventaja competitiva."
  },
  {
    "id": "s5i1",
    "kind": "línea de trabajo",
    "parent": "s5",
    "label": "Auditoría interna estratégica",
    "desc": "Implementamos el área de auditoría como un aliado clave del negocio, utilizando enfoques ágiles y análisis continuo para asegurar el cumplimiento y protección de los activos."
  },
  {
    "id": "s6",
    "kind": "servicio",
    "label": "Contabilidad Estratégica y Reportes de Gestión",
    "desc": "Usar los números para escribir el futuro, no para leer el pasado."
  },
  {
    "id": "s6i0",
    "kind": "línea de trabajo",
    "parent": "s6",
    "label": "Tableros de control (KPIs)",
    "desc": "Diseñamos reportes de gestión gerencial y herramientas visuales para que la toma de decisiones se base en datos en tiempo real."
  },
  {
    "id": "s6i1",
    "kind": "línea de trabajo",
    "parent": "s6",
    "label": "Soporte continuo",
    "desc": "Brindamos asesoramiento administrativo y contable constante, convirtiendo los datos regulatorios en insights de negocio."
  },
  {
    "id": "s7",
    "kind": "servicio",
    "label": "Advisory Board (Consejo Asesor)",
    "desc": "Una mirada externa experta para mantener el rumbo."
  },
  {
    "id": "s7i0",
    "kind": "línea de trabajo",
    "parent": "s7",
    "label": "Disciplina ejecutiva",
    "desc": "Participamos activamente en sus revisiones estratégicas, aportando una visión objetiva y corporativa."
  },
  {
    "id": "s7i1",
    "kind": "línea de trabajo",
    "parent": "s7",
    "label": "Mentoría y control",
    "desc": "Monitoreamos los KPIs críticos del negocio y brindamos mentoría a los líderes de la organización para asegurar el cumplimiento de metas."
  },
  {
    "id": "s8",
    "kind": "servicio",
    "label": "Gestión Integral y Acompañamiento Operativo en Procesos Concursales",
    "desc": "También contamos con experiencia para acompañar empresas que atraviesan procesos concursales o de reestructuración, trabajando de manera coordinada con la Dirección y sus asesores legales."
  },
  {
    "id": "s8i0",
    "kind": "línea de trabajo",
    "parent": "s8",
    "label": "Objetivo",
    "desc": "Ordenar, validar y fortalecer la información administrativa y contable, mejorar el control de gestión, responder a los requerimientos propios del proceso y acompañar el seguimiento de la operación y la generación de fondos."
  },
  {
    "id": "s8i1",
    "kind": "línea de trabajo",
    "parent": "s8",
    "label": "Más allá del proceso",
    "desc": "El foco está puesto no solamente en atravesar el proceso concursal, sino también en generar una organización más ordenada, eficiente y sustentable."
  },
  {
    "id": "ahubi0",
    "kind": "enfoque",
    "parent": "ahub",
    "label": "Foco en Ejecución",
    "desc": "Actuamos como un equipo externo pero con absoluta inmersión operativa. Mantenemos objetividad para resolver crisis económico/financieras, procesos de expansión, integración, profesionalización, cambio cultural y traspasos generacionales."
  },
  {
    "id": "ahubi1",
    "kind": "enfoque",
    "parent": "ahub",
    "label": "Sin generar dependencia",
    "desc": "Incorporamos talento, aportamos trayectoria y capacitamos al equipo interno para garantizar la continuidad del éxito."
  },
  {
    "id": "ahubi2",
    "kind": "enfoque",
    "parent": "ahub",
    "label": "Compromiso directo",
    "desc": "Cada proyecto es ejecutado de principio a fin por sus socios fundadores, sin delegación en perfiles junior o terceros."
  },
  {
    "id": "ahubi3",
    "kind": "enfoque",
    "parent": "ahub",
    "label": "Mirada objetiva",
    "desc": "Un Board Advisory que aporta visión estratégica y experiencia especializada para fortalecer la toma de decisiones en entornos complejos."
  },
  {
    "id": "qhubi0",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Vendemos, pero no tenemos caja."
  },
  {
    "id": "qhubi1",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Cada vez trabajamos más, pero ganamos menos."
  },
  {
    "id": "qhubi2",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "La estructura quedó grande para nuestro nivel de actividad."
  },
  {
    "id": "qhubi3",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "No sabemos exactamente dónde estamos perdiendo rentabilidad."
  },
  {
    "id": "qhubi4",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Tenemos información contable, pero no información para decidir."
  },
  {
    "id": "qhubi5",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Necesitamos reducir costos, pero no queremos destruir la capacidad de la empresa."
  },
  {
    "id": "qhubi6",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "La empresa cambió, pero nuestra forma de trabajar sigue siendo la misma."
  },
  {
    "id": "qhubi7",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Tenemos que tomar decisiones importantes y necesitamos una mirada externa."
  },
  {
    "id": "qhubi8",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "La situación financiera se volvió demasiado compleja."
  },
  {
    "id": "qhubi9",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Vendemos, pero no se traduce en resultados."
  },
  {
    "id": "qhubi10",
    "kind": "frase frecuente",
    "parent": "qhub",
    "label": "Necesitamos ordenar la empresa para poder atravesar esta etapa."
  }
];
