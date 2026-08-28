# Sistema de Biblioteca Digital

Proyecto integrador del curso **Patrones de Software** — Grupo E195
Docente: Ing. Eliecer Montero Ojeda

## Descripción

Sistema orientado a la gestión de libros digitales, préstamos, reservas y
recomendaciones, con soporte para múltiples formatos (PDF, EPUB, MOBI),
múltiples dispositivos de lectura, sistema de suscripciones y acceso
multiusuario simultáneo, pensado para escalar a más de 100.000 usuarios.

Este proyecto se desarrolla de forma incremental: en cada entrega semanal
se incorpora un nuevo patrón de software sobre la misma base de código.

## Patrones implementados

| Semana | Patrón     | Módulo                     | Estado        |
|--------|------------|-----------------------------|---------------|
| 2      | Singleton  | `src/auth/SesionManager.js` | ✅ Implementado |

## Estructura del proyecto

```
biblioteca-digital/
├── src/
│   ├── auth/
│   │   └── SesionManager.js   # Singleton: gestión única de sesión/login
│   └── main.js                 # Punto de entrada y pruebas por consola
└── README.md
```

- **`src/`**: contiene todo el código fuente de la aplicación.
- **`src/auth/`**: agrupa la lógica relacionada con autenticación y sesión
  de usuarios. A medida que se agreguen nuevos patrones, cada uno tendrá
  su propia carpeta temática dentro de `src/` (por ejemplo `src/libros/`,
  `src/prestamos/`, `src/recomendaciones/`, etc.).

## Patrón Singleton — Semana 2

Se implementó en `SesionManager`, el módulo responsable de controlar la
autenticación (login/logout) y el estado de la sesión activa. Se eligió
como Singleton porque el sistema requiere un único punto de control de
sesión compartido por todos los módulos, evitando estados inconsistentes
sobre quién está autenticado en un momento dado.

## Cómo ejecutar el proyecto

Requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# Desde la carpeta raíz del proyecto
node src/main.js
```

Esto ejecuta una serie de pruebas por consola que demuestran:
- Que siempre se obtiene la misma instancia de `SesionManager`.
- Que el estado de sesión se comparte entre distintas referencias.
- Que no es posible crear una instancia adicional con `new`.
- El flujo completo de login y logout.


