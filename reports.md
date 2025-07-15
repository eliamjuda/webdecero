- Explica con tus palabras que es una API
Mi forma de explicar qué es una API es la clásica del restaurante jaja
Una API es un mesero. Un mesero media entre dos partes, el cliente (frontend) y el backend (la cocina). 
La api sirve como un puente entre estos dos, trae la comida (información) que el cliente quiere y le pasa los requerimientos a la cocina.

- En caso de haber utilizado un framework de estilos, justifica su uso y porque elegiste ese. 
Cuando se puede me gusta hacerlo con CSS puro, pero también me gusta mucho usar Tailwind, porque te da rapidez de desarrollo,
diseño responsive muy rapido, y te deja personalizar bastante, tal cual como en CSS. 

- En caso de haber utilizado un patron de componentes, justifica su uso y porque elegiste ese.
Solamente Composition, para abstraer como la lógica de un componente y poder reutilizarlo en varias vistas.
Otra que aunque no es patrón pero utilizo mucho es la filosofía de atomic design.

- ¿Que patrones de diseno conoces?, cuales haz aplicado, explica porque lo utilizaste y como te ayudo a resolver un problema o tuvo una ventaja sobre otros.
Factory, Prototype, Composite, Observer, Singleton.

He aplicado el Observer porque durante un tiempo estuve trabajando con Angular y los observadores eran muy importantes para mandar señales de cambios
y de mucha ayuda porque cuando se usa el observer sólo cambia el componente o la parte que tuvo el cambio y no renderiza toda la app.

- ¿Haz utilizado Sockets?. Si es asi, explica el porque lo utilizaste y sus ventajas.
No he tenido que utilizar Sockets todavía.

## Dependencias

### Tailwind
Instalé Tailwind porque en lo personal creo que agiliza el diseño y desarrollo UI, pero sini quitar que sea personalizable

### react-hook-form 
Después de leer la documentación y casos de uso entre react-hook-form y Formik, me decliné por react-hook-form
por ser más fácil de implementar, ya que Formik es para formularios mucho más complejos y acá no se necesita añadir complejidad para dos inputs



## Comentarios

Cambié mi hook inicial por un contexto porque al querer hacerlo "simplificado" con un simple hook, tenía problemas de renderizado y fuga de memoria,
entonces mejor usé Context y el hook lo cambié a un Provider global para traer la sesión del usuario (si es que existe).