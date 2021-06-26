<template>
  <div class="container">
    <h1 class="course-list__title">
      Cursos En Línea
    </h1>
    <div class="row">
      <div
        v-for="course in courses"
        :key="course.id"
        class="four columns"
      >
        <div class="card">
          <img
            :src="course.image"
            class="u-full-width"
          >
          <div class="info-card">
            <h4>{{ course.title }}</h4>
            <p>{{ course.name }}</p>
            <img src="img/estrellas.png">
            <p class="info-card__price">
              <span class="u-pull-right info-card__price--highlighted">{{ course.price }} €</span>
            </p>
            <a
              href="#"
              class="u-full-width button-primary button input agregar-carrito"
              @click.prevent="addToCart(course)"
            >Agregar Al Carrito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CourseList',
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>

<style scoped>
.course-list__title {
  margin-top: 2rem;
}

.row {
  margin-bottom: 20px;
}

.agregar-carrito {
  margin: 10px 0;
}

.card {
  text-align: center;
  border: 1px solid #e1e1e1;
  background: white;
}

@media (min-width: 550px) {
  .card {
    text-align: left;
  }
}

.info-card {
  padding: 10px 20px;
}

.info-card p,
.card h4 {
  margin-bottom: 5px;
}

.info-card__price {
  text-decoration: line-through;
  font-size: 18px;
  margin-top: 10px;
}

.info-card__price--highlighted {
  font-weight: 700;
  font-size: 22px;
}
</style>
