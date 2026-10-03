## Todas las páginas visibles sin desplazamiento

- Aplicar el formato de una sola pantalla únicamente en computadora; en celular se mantendrá el desplazamiento natural para preservar la legibilidad.
- Mantener Inicio y Nuestro Diferencial en su formato compacto actual, ajustándolos solo si la verificación detecta desbordes.
- Compactar Metodología para que el encabezado, las cuatro etapas y el cierre entren en el alto visible.
- Reorganizar Servicios como una vista fija: encabezado breve y dos paneles internos, con el listado a la izquierda y el detalle seleccionado a la derecha. Cuando un texto exceda el espacio, se desplazará solo dentro del panel de detalle.
- Reorganizar Enlace en Acción y Contacto para que título, información y formulario entren en una pantalla; los sectores extensos tendrán desplazamiento interno cuando sea necesario.
- Mantener el pie de página fuera de la primera vista, para que aparezca inmediatamente al desplazarse, igual que en Inicio.
- Verificar todas las páginas en la medida actual de escritorio (1203 × 775) y revisar también celular para asegurar que siga siendo cómodo.

### Detalles técnicos

- En escritorio, cada página usará el alto disponible debajo de la barra superior (`100svh - 5rem`) con límites internos estables.
- Los paneles internos usarán `overflow-y-auto`; la página no ocultará contenido ni reducirá el texto a tamaños difíciles de leer.
- No se eliminará ni modificará contenido, navegación, formularios ni comportamiento existente.
