<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="four columns">
          <nav class="menu">
            <a href="#">Para tu Negocio</a>
            <a href="#">Conviertete en Instructor</a>
            <a href="#">Aplicaciones Móviles</a>
            <a href="#">Soporte</a>
            <a href="#">Temas</a>
          </nav>
        </div>
        <div class="four columns">
          <nav class="menu">
            <a href="#">¿Quienes Somos?</a>
            <a href="#">Empleo</a>
            <a href="#">Blog</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  margin-top: 40px;
  border-top: 1px solid #aaa;
  padding-top: 40px;
}

.footer .menu a {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
}
</style>
