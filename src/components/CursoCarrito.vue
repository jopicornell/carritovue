<template>
  <div id="carrito">
    <table id="lista-carrito" class="u-full-width">
      <thead>
      <tr>
        <th>Cantidad</th>
        <th>Titulo</th>
        <th>Nombre</th>
        <th>Image</th>
        <th>Precio</th>
        <th>ID</th>
        <th>index</th>
        <th>Borrar</th>
      </tr>
      <tr v-for="(items, index) in list" :key="index">
        <td>{{ items.cantidad }}</td>
        <td>{{ items.titulo }}</td>
        <td>{{ items.nombre }}</td>
        <td><img :src="items.image" alt="producto"></td>
        <td>{{ items.precio }}</td>
        <td>{{ items.id }}</td>
        <td>{{ index }}</td>
        <td><a href="#" @click="$emit('eliminarCurso', $event , index)"> X </a></td>
      </tr>
      </thead>
      <tbody></tbody>
    </table>
    <a href="#" id="vaciar-carrito" class="button u-full-width" @click="$emit('vaciarCarrito', $event)">Vaciar
      Carrito</a>
  </div>

</template>
<script>

export default {
  name: 'CursoCarrito',
  props: {
    list: Array
  }
}
</script>
