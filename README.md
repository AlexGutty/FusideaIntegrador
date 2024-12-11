# FusideaIntegrador
"Página Web para realizar trabajos en colaboración de más personas con habilidades afines"

## Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo para compilar y servir la aplicación.
- **Tailwind CSS**: Framework de CSS para crear interfaces estilizadas y responsivas.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

### Componentes (`/src/auth/components`)

- **`LoginForm.jsx`**: El componente LoginForm es un formulario para que los usuarios ingresen sus credenciales (correo electrónico y contraseña) y se autentiquen en la aplicación.

Renderiza un formulario de inicio de sesión con los siguientes elementos:
Campo para el correo electrónico.
Campo para la contraseña.
Mensaje de error si ocurre algún problema en la autenticación.
Enlace para recuperar la contraseña.
Botón para iniciar sesión, deshabilitado mientras se realiza la solicitud.
Enlace para que los usuarios puedan registrarse.
Lógica del componente: Utiliza el hook personalizado useLoginForm para manejar el estado del formulario:

formData: Estado de los valores de los campos del formulario.
handleChange: Función para actualizar el estado al cambiar los valores de los campos.
handleSubmit: Función que se ejecuta al enviar el formulario.
error: Mensaje de error que se muestra si ocurre un problema durante la autenticación.
loading: Indica si la solicitud está en proceso, deshabilitando la interacción del formulario.

- **`PasswordRecoveryForm.jsx`**: formulario que permite a los usuarios recuperar su contraseña mediante el envío de un correo electrónico.
Descripción:

Renderiza un formulario donde los usuarios pueden ingresar su correo electrónico para solicitar un enlace de recuperación de contraseña.
Muestra mensajes de error o éxito según el resultado del intento de recuperación.
Lógica del componente: Utiliza el hook personalizado usePasswordRecovery para manejar la lógica de recuperación de contraseñas:

email: Estado que almacena el correo electrónico ingresado por el usuario.
setEmail: Función para actualizar el estado del correo electrónico.
handleSubmit: Función que se ejecuta al enviar el formulario.
errorMessage: Mensaje de error que se muestra si ocurre un problema al enviar el correo.
successMessage: Mensaje de éxito que se muestra si el enlace de recuperación se envía correctamente.

- **`PasswordResetForm.jsx`**: formulario para que los usuarios puedan restablecer su contraseña
Utiliza el hook personalizado usePasswordReset para gestionar la lógica del formulario:

newPassword: Estado que almacena la nueva contraseña ingresada por el usuario.
confirmPassword: Estado que almacena la confirmación de la nueva contraseña.
setNewPassword: Función para actualizar el estado de la nueva contraseña.
setConfirmPassword: Función para actualizar el estado de la confirmación de la contraseña.
handleSubmit: Función que se ejecuta al enviar el formulario.
successMessage: Mensaje de éxito que se muestra si el restablecimiento fue exitoso.
errorMessage: Mensaje de error que se muestra si ocurrió algún problema.

- **`RegisterForm.jsx`**: permite a los usuarios registrarse en la plataforma proporcionando información personal y profesional
Lógica del componente: Este componente utiliza el hook useRegister para manejar la lógica del formulario:

Estados principales:
id_speciality, id_role, name, last_name, email, gender, phoneNumber, aboutname, password, confirmPassword, avatar, banner.
Funciones:
handleChange: Manejador general para actualizar los valores de los campos.
handleSubmit: Función para enviar el formulario.
Mensajes:
successMessage: Indica el éxito del registro.
errorMessage: Notifica errores durante el registro.

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
