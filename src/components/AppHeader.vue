<template>
  <header
    class="header"
  >
    <div class="container">
      <div class="row">
        <div class="four columns">
          <img
            src="img/logo.jpg"
          >
        </div>
        <div class="two columns u-pull-right">
          <ul>
            <li class="submenu">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cart from '@/components/Cart';

export default {
  name: 'AppHeader',
  components: {
    Cart,
  },
};
</script>

<style scoped>
.header {
  padding: 20px 0 0 0;
  background: white;
  text-align: center;
}
</style>
