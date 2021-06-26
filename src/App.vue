<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
