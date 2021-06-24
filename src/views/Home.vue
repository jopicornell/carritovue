<template>
  <header id="header" class="header">
    <div class="container">
      <div class="row">
        <div class="four columns">
          <img src="img/logo.jpg" id="logo">
        </div>
        <div class="two columns u-pull-right">
          <ul>
            <li class="submenu">
              <img src="img/cart.png" id="img-carrito">
              <CursoCarrito :list="this.Cursos_Carrito" @eliminarCurso="eliminarCurso" @vaciarCarrito="vaciarCarrito"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <CursoHero/>
  <CursoAcercade/>

  <div id="lista-cursos" class="container">
    <h1 id="encabezado" class="encabezado">Cursos En Línea </h1>
    <CursoTarjeta :CursoInfo="this.Cursos_Info" @agregarCurso="agregarCurso"/>
  </div>

  <CursoFooter/>
</template>


<script>
// @ is an alias to /src
import CursoCarrito from "@/components/CursoCarrito";
import CursoTarjeta from "@/components/CursoTarjeta";
import CursoHero from "@/components/CursoHero";
import CursoAcercade from "@/components/CursoAcercade";
import CursoFooter from "@/components/CursoFooter";

export default {
  data() {
    return {
      Cursos_Info: [
        {
          id: 1,
          titulo: 'HTML5, CSS3, JavaScript',
          nombre: 'Juan Pedro',
          image: 'img/curso1.jpg',
          precio: 240,
          cantidad: 1
        },
        {id: 2, titulo: 'JavaScript', nombre: 'Maria casas', image: 'img/curso2.jpg', precio: 40, cantidad: 1},
        {id: 3, titulo: 'Typscript', nombre: 'Daniel Martinez', image: 'img/curso3.jpg', precio: 120, cantidad: 1},
      ],
      Cursos_Carrito: [],
      Curso_Similar: '',
    }
  },
  components: {

    CursoFooter,
    CursoAcercade,
    CursoHero,
    CursoCarrito,
    CursoTarjeta,

  },
  methods: {

    Comprobacion: function (valor) {
      this.Curso_Similar = this.Cursos_Carrito.some(curso => curso.id === valor);
      return this.Curso_Similar
     },

    // Vaciar Carrito
    vaciarCarrito: function () {
      this.Cursos_Carrito = [];
    },

    // Agregar Curso
    agregarCurso: function (indice, Curso_Tarjeta_datos) {

      // funcion que comprueba si existe igualdad de ID
      this.Comprobacion(this.Cursos_Info[indice].id)

      // compruebo si existe
      if (this.Curso_Similar) {
        // Si existe creo un nuevo Array y lo retorno con el precio modificado
        let cursos = this.Cursos_Carrito.map(curso => {
          if (curso.id === this.Cursos_Info[indice].id) {
            curso.cantidad++
            return curso
          } else {
            // Si no, retorno un array con los mismos datos
            return curso
          }
        })
        // Actualizo el carrito
        this.Cursos_Carrito = [...cursos]
      } else {
        // Si no existe, añado el curso al carrito
        this.Cursos_Carrito.push(Curso_Tarjeta_datos)
      }
    },

    //  eliminar Curso
    eliminarCurso: function (indice, items) {

      // funcion que comprueba si existe igualdad de ID
      this.Comprobacion(items.id)

      // Pregunto si existe
      if (this.Curso_Similar) {
        // Pregunto, si la cantidad es mayor a 1
        if (this.Cursos_Carrito[indice].cantidad > 1) {
          // Si es mayor a 1, le resto 1
          this.Cursos_Carrito[indice].cantidad--
        } else {
          // Si es igual a 1, lo elimino
          this.Cursos_Carrito.splice(indice, 1)
        }
      }
    },

  },
}

</script>

<style>

html {
  font-size: 62.5%;
}

body {
  background-color: #f5f3f3
}

h1 {
  text-align: center;
}

h2 {
  font-size: 3rem;
}

h4 {
  font-size: 16px;
  font-weight: 700;
}

header {
  padding: 20px 0 0 0;
  background: white;
  text-align: center;
}

@media (min-width: 750px) {
  header {
    text-align: left;
  }
}

.borrar-curso {
  background-color: red;
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

ul {
  list-style: none;
}

#encabezado {
  margin: 30px 0;
}

.submenu {
  position: relative;
}

.submenu #carrito {
  display: none;
}

.submenu:hover #carrito {
  display: block;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: white;
  padding: 20px;
  min-height: 400px;
  min-width: 300px;
}

.vacio {
  padding: 10px;
  background-color: crimson;
  text-align: center;
  border-radius: 10px;
  color: white;
}

</style>
