# FusideaIntegrador
"Página Web para realizar trabajos en colaboración de más personas con habilidades afines"

## Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo para compilar y servir la aplicación.
- **Tailwind CSS**: Framework de CSS para crear interfaces estilizadas y responsivas.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

### Componentes (`/src/components`)

- **`Footer.jsx`**: Componente que renderiza el pie de página de la web, que podría incluir información de contacto, enlaces de redes sociales, derechos de autor, etc.
- **`Header.jsx`**: Componente que renderiza la cabecera de la web, que incluye el logotipo y las opciones de navegación principales.

### Contextos (`/src/contexts`)

- **`AuthContext.js`**: Contexto para manejar el estado de autenticación en toda la web. Proporciona el estado de usuario autenticado y métodos para iniciar y cerrar sesión.
- **`NotificationContext.js`**: Contexto para manejar las notificaciones globales de la web, permitiendo mostrar mensajes de éxito, error o información.
- **`ProjectContext.js`**: Contexto para manejar el estado de los proyectos, permitiendo gestionar y compartir información sobre los proyectos en la web.

### Hooks (`/src/hooks`)

- **`useAuth.js`**: Hook personalizado para gestionar la autenticación del usuario, proporcionando funcionalidades como iniciar sesión, cerrar sesión y verificar el estado de autenticación.

### Páginas (`/src/pages`)

- **`Home.jsx`**: Página principal de la web, que probablemente muestra una visión general del sistema o una lista de proyectos, dependiendo de la funcionalidad de la app.
- **`Login.jsx`**: Página para que los usuarios ingresen sus credenciales y accedan a la web.
- **`Profile.jsx`**: Página de perfil del usuario donde se muestra y permite editar la información personal.
- **`Register.jsx`**: Página de registro para nuevos usuarios, permitiendo crear una cuenta en la web.

### Servicios (`/src/services`)

#### **`api.js`**
Servicio para gestionar las peticiones HTTP hacia las APIs, como obtener, crear, actualizar o eliminar datos del servidor.

#### **`authService.js`**
Servicio encargado de la gestión de la autenticación, incluyendo el inicio de sesión, registro y cierre de sesión del usuario.

#### **`notificationService.js`**
Servicio para manejar las notificaciones dentro de la web, incluyendo la creación y visualización de mensajes de notificación.

#### **`projectService.js`**
Servicio para manejar las operaciones relacionadas con proyectos, como obtener, crear o actualizar información sobre proyectos.

### Archivos de Configuración

- **`tailwind.config.js`**: Archivo de configuración de **Tailwind CSS**, donde se definen los colores, tipografías, breakpoints y otras personalizaciones de la interfaz.
- **`vite.config.js`**: Archivo de configuración de **Vite**, que gestiona las opciones de construcción, desarrollo y optimización de la web.

### Archivos Principales

- **`App.jsx`**: Componente principal de la web que maneja el enrutamiento y el renderizado de las páginas y componentes principales.
- **`main.jsx`**: Punto de entrada de la web que monta el componente principal `App` en el DOM.
- **`index.html`**: Archivo HTML principal que contiene el contenedor donde se monta la web React, así como las referencias a los estilos y scripts.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AlexGutty/FusideaIntegrador.git
2. Instalar Dependencias
   npm install
3. Ejecutar
   npm run dev
