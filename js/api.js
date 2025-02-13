/**
 * Carga todos los productos del usuario especificado desde la API
 * @async
 * @param {string} usuario - Nombre del usuario
 * @returns {Array} - Array de productos
 * @throws {Error} - Si ocurre un error al cargar los productos desde la API.
 */
async function cargarProductos(usuario) {
    // TO DO: Implementar la función para cargar los productos
    // TO DO: Construir la URL para la petición fetch
    // TO DO: Realizar la petición fetch con la URL construida
    // TO DO: Si la respuesta no es correcta, lanzar un error
    // TO DO: Si la respuesta es correcta, parsear la respuesta como JSON
    // TO DO: Devolver el array de productos
    // TO DO: Capturar cualquier error que ocurra durante el proceso
    // TO DO: Mostrar un mensaje de error en la consola
    // TO DO: Devolver un array vacío en caso de error
}

/**
 * Agrega un nuevo producto al catálogo del usuario especificado
 * @async
 * @param {string} usuario - Nombre del usuario
 * @param {object} producto - Objeto con los datos del nuevo producto
 * @returns {object} - Objeto con los datos del nuevo producto agregado
 * @throws {Error} - Si ocurre un error al agregar el producto.
 */
async function agregarProducto(usuario, producto) {
    // TO DO: Implementar la función para agregar un nuevo producto
    // TO DO: Construir la URL para la petición fetch
    // TO DO: Realizar la petición fetch con la URL construida, método POST y el producto en el cuerpo de la petición
    // TO DO: Si la respuesta no es correcta, lanzar un error
    // TO DO: Si la respuesta es correcta, parsear la respuesta como JSON
    // TO DO: Devolver el nuevo producto agregado
    // TO DO: Capturar cualquier error que ocurra durante el proceso
    // TO DO: Mostrar un mensaje de error en la consola
}

/**
 * Actualiza un producto existente en el catálogo del usuario especificado
 * @async
 * @param {string} usuario - Nombre del usuario
 * @param {number} idProducto - ID del producto a actualizar
 * @param {object} productoActualizado - Objeto con los datos actualizados del producto
 * @returns {object} - Objeto con los datos del producto actualizado
 * @throws {Error} - Si ocurre un error al actualizar el producto.
 */
async function actualizarProducto(usuario, idProducto, productoActualizado) {
    // TO DO: Implementar la función para actualizar un producto
    // TO DO: Construir la URL para la petición fetch
    // TO DO: Realizar la petición fetch con la URL construida, método PUT y el producto actualizado en el cuerpo de la petición
    // TO DO: Si la respuesta no es correcta, lanzar un error
    // TO DO: Si la respuesta es correcta, parsear la respuesta como JSON
    // TO DO: Devolver el producto actualizado
    // TO DO: Capturar cualquier error que ocurra durante el proceso
    // TO DO: Mostrar un mensaje de error en la consola
}

/**
 * Elimina un producto del catálogo del usuario especificado
 * @async
 * @param {string} usuario - Nombre del usuario
 * @param {number} idProducto - ID del producto a eliminar
 * @returns {boolean} - True si se eliminó el producto correctamente, False en caso contrario
 * @throws {Error} - Si ocurre un error al eliminar el producto.
 */
async function eliminarProducto(usuario, idProducto) {
    // TO DO: Implementar la función para eliminar un producto
    // TO DO: Construir la URL para la petición fetch
    // TO DO: Realizar la petición fetch con la URL construida y método DELETE
    // TO DO: Si la respuesta no es correcta, lanzar un error
    // TO DO: Si la respuesta es correcta, devolver true
    // TO DO: Capturar cualquier error que ocurra durante el proceso
    // TO DO: Mostrar un mensaje de error en la consola
    // TO DO: Devolver false en caso de error
}

export { cargarProductos, agregarProducto, actualizarProducto, eliminarProducto };