<template>
  <tr>
    <td>
      <span
        class="course-row__minus"
        @click="$emit('changeQuantity', -1)"
      >-</span>
      {{ course.quantity }}
      <span
        class="course-row__plus"
        @click="$emit('changeQuantity', 1)"
      >+</span>
    </td>
    <td>{{ course.title }}</td>
    <td>
      <img
        :src="course.image"
        alt="producto"
      >
    </td>
    <td>{{ course.price * course.quantity }} €</td>
    <td>{{ course.id }}</td>
    <td>
      <a
        href="#"
        @click="$emit('removeCourse', course)"
      > X </a>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'CourseCartRow',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  emits: ['removeCourse', 'changeQuantity'],
};
</script>

<style scoped>
.course-row__minus {
  font-weight: 700;
  margin-right: 0.5rem;
  cursor: pointer;
}

.course-row__plus {
  font-weight: 700;
  margin-left: 0.5rem;
  cursor: pointer;
}
</style>
