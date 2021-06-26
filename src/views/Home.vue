<template>
  <FindHero v-model="courseNameToSearch" />

  <ExplainSection />

  <CourseList :courses="filteredCourses" />
</template>

<script>
import CourseList from '@/components/CourseList';
import FindHero from '@/components/FindHero';
import ExplainSection from '@/components/ExplainSection';

export default {
  components: {
    ExplainSection,
    FindHero,
    CourseList,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'HTML5, CSS3, JavaScript',
          name: 'Juan Pedro',
          image: 'img/curso1.jpg',
          price: 240,
        },
        {
          id: 2,
          title: 'JavaScript',
          name: 'Maria casas',
          image: 'img/curso2.jpg',
          price: 40,
        },
        {
          id: 3,
          title: 'Typscript',
          name: 'Daniel Martinez',
          image: 'img/curso3.jpg',
          price: 120,
        },
      ],
      courseNameToSearch: '',
    };
  },
  computed: {
    filteredCourses() {
      if (this.courseNameToSearch) {
        return this.courses.filter((curso) => curso.title.includes(this.courseNameToSearch));
      }
      return this.courses;
    },
  },
};
</script>

<style>
html {
  font-size: 62.5%;
}

body {
  background-color: #f5f3f3;
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

@media (min-width: 750px) {
  header {
    text-align: left;
  }
}

ul {
  list-style: none;
}

</style>
