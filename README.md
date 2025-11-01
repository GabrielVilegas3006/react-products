# 🛍️ React Products

Este proyecto es una aplicación creada con **React + Vite**, que muestra una lista de productos cargados desde un archivo JSON local.  
Forma parte del entregable del curso de React.

---

## ⚙️ Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/GabrielVilegas3006/react-products.git
   ```

2. Entrar al directorio del proyecto:

   ```bash
   cd react-products
   ```

3. Instalar dependencias:

   ```bash
   npm install
   ```

---

## ▶️ Ejecución en modo desarrollo

Inicia el servidor local con:

```bash
npm run dev
```

Luego abre en el navegador la URL que aparece en la terminal, por ejemplo:

```
http://localhost:5173
```

---

## 📦 Estructura del proyecto

```
react-products/
├── node_modules/
├── public/
├── src/
│   ├── assets/        ← imágenes de productos
│   ├── components/    ← ProductList.jsx y ProductItem.jsx
│   ├── data/          ← products.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md          
└── vite.config.js
```

---

## 🧩 Descripción

El proyecto muestra una lista de productos a partir de un archivo JSON local.  
Cada producto contiene nombre, descripción, precio e imagen, renderizados mediante los componentes:

- ProductList: Contenedor principal que carga los productos.
- ProductItem: Tarjeta individual para cada producto.

---

## 💻 Tecnologías utilizadas

- React 18
- Vite
- CSS3