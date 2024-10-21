# Rick and Morty App

Este proyecto es una aplicación web que permite explorar personajes, ubicaciones y episodios del universo de Rick and Morty, desarrollado para demostrar la integración de Next.js 14.2.15, React, TypeScript, TanStack Query, Shadcn UI y Tailwind CSS en un proyecto moderno. Esta es la primera versión del proyecto y en el futuro se le estarán agregando nuevas funcionalidades.

## 🚀 Tecnologías Utilizadas

- **Next.js (v14.2.15)**: Utilizado como el framework principal para el proyecto, aprovechando su arquitectura de páginas y rutas dinámicas, junto con las funcionalidades de server-side rendering (SSR) y static site generation (SSG).

- **React**: Utilizado como la biblioteca de interfaces de usuario, creando componentes reutilizables y gestionando el estado local de manera eficiente.

- **TypeScript**: Proporciona tipado estático a lo largo del código, mejorando la mantenibilidad y reduciendo errores durante el desarrollo.

- **TanStack Query**: Implementado para manejar la gestión de datos asíncronos y la caché de manera eficiente, facilitando las solicitudes API y el manejo de estados de carga, error y éxito.

- **Axios**: Usado como cliente HTTP para realizar solicitudes a la API de Rick and Morty, aprovechando su simplicidad y características avanzadas como interceptores y cancelación de solicitudes.

- **Shadcn UI**: Utilizado para construir componentes de interfaz de usuario elegantes y accesibles, proporcionando un conjunto de componentes preconstruidos que se integran perfectamente con Tailwind CSS.

- **Tailwind CSS**: Utilizado como framework de CSS para estilos utilitarios, permitiendo un diseño rápido y responsivo con clases de utilidad que facilitan la personalización del diseño.

## ✨ Características del Proyecto
- **Exploración de personajes, ubicaciones y episodios**: Permite a los usuarios navegar y visualizar información detallada sobre personajes, sus ubicaciones y episodios favoritos de Rick and Morty.

- **Gestión eficiente de datos con TanStack Query**: Las solicitudes a la API de Rick and Morty se gestionan con TanStack Query, lo que permite:
    - Caché automática de los datos para mejorar el rendimiento.
    - Manejo optimizado de estados de carga y error.
    - Revalidación de datos para asegurar la frescura de la información mostrada.

- **Optimización de rendimiento con Next.js**: Uso de SSR y SSG para mejorar los tiempos de carga y la optimización para motores de búsqueda (SEO).

- **Interfaz de usuario interactiva y responsiva**: Construida con componentes modulares de React y Shadcn UI, junto con Tailwind CSS para ofrecer una experiencia de usuario fluida y amigable en dispositivos móviles y de escritorio.

## 📦 Instalación

1. Clona el repo:
    ```bash
    git clone https://github.com/ldmontielm/rick-and-morty-app.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd rick-and-morty-app
    ```
3. Instala las dependencias:
    ```bash
    pnpm install
    ```
4. Inicia el servidor de desarrollo:
    ```bash
    pnpm dev
    ```


## 🤝 Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de crear un fork, realizar los cambios y enviar un pull request. ¡Toda mejora es bienvenida!