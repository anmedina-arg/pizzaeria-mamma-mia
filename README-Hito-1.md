🧱 Hito 1 - Pizzería Mamma Mía

En este hito validaremos nuestros conocimientos de Introducción a React. Para lograrlo, necesitarás aplicar los conocimientos adquiridos hasta el momento.

⏱️ Tiempo asociado: 2 horas cronológicas

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener el máximo puntaje y enfocar bien los esfuerzos.

📝 Descripción

A continuación, realizaremos un proyecto con React, el cual estará dividido en distintos hitos. Para esta etapa inicial, nos solicitan las siguientes implementaciones:

🚀 Requerimientos iniciales

1. Crear un nuevo proyecto de React con Vite.js
2. Incorporar Bootstrap al proyecto (opcional o según preferencia)
3. Crear los siguientes componentes:

   - 3.1 Navbar
   - 3.2 Footer
   - 3.3 Home
   - 3.3 Header
   - 3.4 CardPizza

🧩 Requerimientos específicos

1. Estructura de App.jsx (2 puntos)
   El componente App.jsx debe renderizar:

```jsx
<Navbar />
<Home />
<Footer />
```

2. Componente Header.jsx (1 punto)
   Debe ser llamado desde el interior de Home.jsx y contener:

- Un título
- Una descripción

💡 Puedes basarte en el diseño proporcionado en el material de apoyo.

3. Componente Navbar.jsx (2 puntos)
   Debe incluir un menú con las siguientes opciones:

- 🍕 Home
- 🔓 Profile
- 🔒 Logout
- 🔐 Login
- 🔐 Register
- 🛒 Total: $

📌 Notas:

- Puedes usar botones de Bootstrap
- No es necesario que tengan funcionalidad por ahora
- El componente debe ser llamado desde App.jsx
- Debes incluir dos variables dentro del componente:

```jsx
const Navbar = () => {
const total = 25000;
const token = false;

return (
// JSX aquí
);
};
```

✅ Comportamiento:
Si token es true: mostrar 🔓 Profile y 🔒 Logout

Si token es false: mostrar 🔐 Login y 🔐 Register

Los botones Home y Total se muestran siempre

💡 Tips:

- Usa el operador ternario para condicionar la visibilidad de los botones
- Para mostrar el total formateado: total.toLocaleString()
- Puedes extraer esta lógica a una función utilitaria

4. Botones visibles siempre (2 puntos)
   Los botones Home y Total deben mostrarse siempre, sin importar el valor del token.

5. Componente CardPizza.jsx (2 puntos)
   Este componente debe recibir props para mostrar la información de una pizza:

```jsx
<CardPizza
name="Napolitana"
price={5950}
ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
/>

<CardPizza
name="Española"
price={6950}
ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
/>

<CardPizza
name="Pepperoni"
price={6950}
ingredients={["mozzarella", "pepperoni", "orégano"]}
img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
/>
```

✅ Estos componentes deben ser llamados desde Home.jsx.

📝 Nota:
Los botones de Ver más y Añadir pueden estar presentes, pero no es necesario que tengan funcionalidad.

6. Componente Footer.jsx (1 punto)
   Debe contener:

- © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
- Debe ser llamado desde App.jsx.

Puedes agregar más información si lo deseas.

✅ Consideraciones finales
Te recomendamos revisar los pantallazos de referencia del resultado final que se encuentran en el material de apoyo del hito.
