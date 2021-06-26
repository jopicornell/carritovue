<template>
  <div
    class="cart__button"
    @click="toggleCartVisibility"
  >
    <img
      src="img/cart.png"
      height="25"
    >
    <span
      v-if="cart.length > 0"
      class="badge"
    >{{ cart.length }}</span>
  </div>
  <div
    v-if="isCartVisible"
    v-click-outside="hideCart"
    class="cart"
  >
    <table class="u-full-width">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Titulo</th>
          <th>Image</th>
          <th>Precio</th>
          <th>ID</th>
          <th>Borrar</th>
        </tr>

        <CourseCartRow
          v-for="course in cart"
          :key="course.id"
          :course="course"
          @removeCourse="removeProductFromCart(course)"
          @changeQuantity="changeQuantity(course, $event)"
        />
      </thead>
      <tbody />
    </table>
    <a
      href="#"
      class="button u-full-width"
      @click="emptyCart"
    >Vaciar Carrito</a>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import CourseCartRow from '@/components/CourseCartRow.vue';

export default {
  name: 'Cart',
  components: {
    CourseCartRow,
  },
  data() {
    return { isCartVisible: false };
  },
  computed: {
    ...mapGetters(['cart']),
  },
  mounted() {
    window.addEventListener('click', this.handleClick);
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClick);
  },
  methods: {
    ...mapActions(['emptyCart', 'removeProductFromCart', 'changeQuantityToProduct']),

    toggleCartVisibility() {
      this.isCartVisible = !this.isCartVisible;
    },

    changeQuantity(product, quantity) {
      this.changeQuantityToProduct({ product, quantity });
    },

    hideCart() {
      this.isCartVisible = false;
    },
  },
};
</script>

<style scoped>
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  background-color: red;
  padding: 5px;
  border-radius: 50px;
  color: white;
  height: 12px;
  width: 20px;
}

.cart {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: white;
  padding: 20px;
  min-height: 400px;
  min-width: 300px;
}

.cart__button {
  display: flex;
  cursor: pointer;
}
</style>
