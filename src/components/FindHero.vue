<template>
  <div class="hero-find">
    <div class="container">
      <div class="row">
        <div class="six columns">
          <div class="hero-find__content">
            <h2>Aprende algo nuevo</h2>
            <p>Todos los cursos a $15</p>
            <div class="hero-find__form">
              <input
                v-model="value"
                class="hero-find__input u-full-width"
                type="text"
                placeholder="¿Que te gustaría Aprender?"
              >
              <input
                type="submit"
                class="hero-find__search-button"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FindHero',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style scoped>
.hero-find {
  background-image: url(/img/hero.jpg);
  height: 350px;
  background-size: cover;
}

.hero-find__content {
  margin-top: 80px;
  color: white;
}

.hero-find__form {
  height: 50px;
  position: relative;
  margin-bottom: 0;
}

.hero-find__search-button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  display: block;
  text-indent: -9999px;
  width: 50px;
  background-image: url(/img/lupa.png);
  background-position: right center;
  background-repeat: no-repeat;
  border: none;
}

.hero-find__input {
  color: #222222;
}
</style>
