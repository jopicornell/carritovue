<template>
  <tr>
        <td>{{ Cursofilas.cantidad }}</td>
        <td>{{ Cursofilas.titulo }}</td>
        <td>{{ Cursofilas.nombre }}</td>
        <td><img :src="Cursofilas.image" alt="producto"></td>
        <td>{{ Cursofilas.precio * Preciobase }}</td>
        <td>{{ Cursofilas.id }}</td>
        <td><a href="#" @click="$emit('eliminarCurso', indice, Cursofilas)"> X </a></td>
  </tr>
</template>
<script>

export default {
  name: 'CursoCarritoRow',
  props: {
    Cursofilas: Object,
    indice: {type: Number, required: true, default: 1},
    Preciobase: Number
  }
}
</script>
