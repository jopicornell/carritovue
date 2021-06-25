<template>
  <div id="hero">
    <div class="container">
      <div class="row">
        <div class="six columns">
          <div class="contenido-hero">
            <h2>Aprende algo nuevo</h2>
            <p>Todos los cursos a $15</p>
            <form action="#" id="busqueda" method="post" class="formulario">
              <input style="color:black;" class="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?"
                     id="buscador" :value="title" @input="$emit('update:title', $event.target.value)">
              <input type="submit" id="submit-buscador" class="submit-buscador">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CursoHero',
  props: {
    title: String
  },
  emits: ['update:title'],
}
</script>

<style scoped>
#hero {
  background-image: url(/img/hero.jpg);
  height: 350px;
  background-size: cover;
}

.contenido-hero {
  margin-top: 80px;
  color: white;
}

.contenido-hero form {
  position: relative;
  margin-bottom: 0;
}

.contenido-hero form #buscador {
  height: 50px;
  margin-bottom: 0;
}

.contenido-hero form .submit-buscador {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0;
  display: block;
  text-indent: -9999px;
  width: 50px;
  background-image: url(/img/lupa.png);
  background-position: right center;
  background-repeat: no-repeat;
  border: none;
}

</style>