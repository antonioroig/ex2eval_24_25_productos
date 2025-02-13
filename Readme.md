# EXAMEN 2ª EVALUACIÓN
# APLICACIÓN DE CATÁLOGO DE PRODUCTOS

## Descripción

Este proyecto implementa una aplicación web para gestionar un catálogo de productos. Permite a los usuarios:

* Cargar productos desde una API.
* Agregar nuevos productos.
* Editar productos existentes.
* Eliminar productos.
* Guardar y cargar productos en LocalStorage.

### Insertar en index.html el script como módulo

## Estructura del proyecto

El proyecto consta de los siguientes archivos:

Directorio raíz del proyecto:
* `index.html`: Contiene la estructura HTML de la aplicación.
Directorio js/:
* `app.js`: Contiene la lógica principal de la aplicación en JavaScript.
* `api.js`: Contiene las funciones para interactuar con la API, asíncronas.
* `render.js`: Contiene las funciones para renderizar la lista de productos y el formulario de edición.
Directorio css/:
* `styles.css`: Contiene los estilos CSS de la aplicación.

# Imágenes de como queda la lista de productos, la aplicación y vídeo explicativo
***Nótese cómo el formulario de edición de productos que viene de un template se añade en el <li> del producto como el último <div> y dentro del <div>, antes del formulario se pone un <br>.***
[Ver captura de la estructura](imagenes/estructuraListadoProductos.png)
[Ver vista de la aplicación](imagenes/vistaAplicacion.png)
[Ver vídeo explicativo](https://gvaedu-my.sharepoint.com/:v:/g/personal/a_roighernandez_edu_gva_es/EX_MsDEoOCVPpZ83h4PbWioBmnDV2uOG6gGVRndKw6wKrg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=EBdhaj)

```html
<h2>Listado de Productos</h2>

<ul id="lista-productos">

    <li class="flex">
        <div class="contenido-producto">
            <strong>Teclado rojo</strong><br>
            Precio: 2.00€<br>
            Cantidad: 8<br>
            Valor total: 16.00€
        </div>

        <div class="acciones-producto flex">
            <button class="editar" disabled>Editar</button>
            <button class="eliminar">Eliminar</button>
        </div>

        <div>
            <br>
            <form class="formulario-edicion">
                <input type="text" class="editar-nombre" required>
                <input type="number" class="editar-precio" required>
                <input type="number" class="editar-cantidad" required>
                <button type="submit">Guardar</button>
                <button type="button" class="cancelar-edicion">Cancelar</button>
            </form>
        </div>
    </li>

    <li class="flex">
        <div class="contenido-producto"></div>
        <div class="acciones-producto flex"></div>
    </li>

    <li class="flex"></li>
</ul>
```

## Funcionalidades

### `api.js`

* **`cargarProductos(usuario)`:** Carga los productos del usuario especificado desde la API.
* **`agregarProducto(usuario, producto)`:** Agrega un nuevo producto al catálogo del usuario especificado.
* **`actualizarProducto(usuario, idProducto, productoActualizado)`:** Actualiza un producto existente en el catálogo del usuario especificado.
* **`eliminarProducto(usuario, idProducto)`:** Elimina un producto del catálogo del usuario especificado.

### `render.js`

* **`renderizarProductos(usuario, productos)`:** Renderiza la lista de productos en la página.
* **`ManejaEdit`:** Clase que maneja la edición de un producto, incluyendo la visualización del formulario de edición y la actualización del producto en la API.
* **`ManejaBorra`:** Clase que maneja la eliminación de un producto.

### `app.js`

* **`DOMContentLoaded` event:**
    * Inicializa la aplicación.
    * Maneja los eventos de los botones para cargar, guardar y borrar productos.
    * Maneja el evento `submit` del formulario para agregar nuevos productos.

## Consideraciones

* La API utilizada en este proyecto es `https://a5vb9u9o1c.execute-api.us-east-1.amazonaws.com/latest/`.

* # Detalles de la API

Este proyecto utiliza una API externa para gestionar los datos de los productos. Aquí están los detalles de las rutas de la API, los métodos y las estructuras de datos:

**URL base:** `https://a5vb9u9o1c.execute-api.us-east-1.amazonaws.com/latest/`

**Rutas:**

| Ruta                                         | Método | Descripción                                                                 |
|-----------------------------------------------|--------|-----------------------------------------------------------------------------|
| `/{usuario}`                                | GET    | Obtiene todos los productos del usuario especificado.                         |
| `/{usuario}`                                | POST   | Agrega un nuevo producto para el usuario especificado.                       |
| `/{usuario}/{idProducto}`                    | PUT    | Actualiza el producto con el ID dado para el usuario especificado.           |
| `/{usuario}/{idProducto}`                    | DELETE | Elimina el producto con el ID dado para el usuario especificado.           |

**Estructuras de datos:**

* **Producto:**
    * `producto_id`: (número) Identificador único del producto (hash generado por la API).
    * `nombre`: (cadena) Nombre del producto.
    * `precio`: (número) Precio del producto.
    * `cantidad`: (número) Cantidad del producto en stock.
**Aunque en las respuestas de la API cada producto tenga la propiedad usuario, no importa, la incluye la API**

**Ejemplos de solicitud y respuesta:**

**GET `/{usuario}`**

* **Solicitud:** `https://a5vb9u9o1c.execute-api.us-east-1.amazonaws.com/latest/john.doe`
* **Respuesta:**

```json
[
  {
    "nombre": "Monitor Curvo 27 Pulgadas",
    "usuario": "john.doe",
    "producto_id": "bbdabe92-882c-4951-92c0-9456184c60de",
    "precio": 300,
    "cantidad": 8
  },
  {
    "nombre": "Teclado Mecánico RGB",
    "usuario": "john.doe",
    "producto_id": "d0d3a2b4-f403-44eb-a283-cb4354fdf893",
    "precio": 120,
    "cantidad": 15
  }
]
```


**POST `/{usuario}`**

* **Solicitud:** `https://a5vb9u9o1c.execute-api.us-east-1.amazonaws.com/latest/john.doe`
* **Cuerpo:**
```json
[
  {
    "nombre": "Producto C",
    "precio": 15.75,
    "cantidad": 30
  }
]
```
* **Respuesta:**
```json
{
  "message": "Producto insertado correctamente",
  "producto_id": "a862c50e-a93b-4744-b19c-b348fb081b73"
}
```
**PUT `/{usuario}/{idProducto}`**

* **Solicitud:** `https://a5vb9u9o1c.execute-api.us-east-1.amazonaws.com/latest/john.doe/a862c50e-a93b-4744-b19c-b348fb081b73`
* **Cuerpo:**
```json
{
  "nombre": "Producto C Actualizado",
  "precio": 30
}
```
* **Respuesta:**
```json
{
  "nombre": "Producto C Actualizado",
  "usuario": "john.doe",
  "producto_id": "a862c50e-a93b-4744-b19c-b348fb081b73",
  "cantidad": 30,
  "precio": 30
}
```  
**DELETE `/{usuario}/{idProducto}`**

* **Solicitud:** `https://a5vb9u9o1c.execute-api.us-east-1.amazonaws.com/latest/john.doe/a862c50e-a93b-4744-b19c-b348fb081b73`

* **Respuesta:**
```json
{
  "message": "Producto eliminado correctamente"
}
```
## Evaluación

La evaluación de este proyecto se basará en la correcta implementación de las funciones en los archivos `api.js`, `render.js` y `app.js`, así como en la calidad del código.

**Puntuación:**

* **`api.js`:** 2 puntos 
* **`render.js`:** 5 puntos (2 puntos para `renderizarProductos`, 2 punto para `ManejaEdit`, 1 punto para `ManejaBorra`).
* **`app.js`:** 3 puntos 