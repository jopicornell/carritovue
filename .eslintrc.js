module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    'no-param-reassign': [
      // Avoid vuex state errors
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
  },
};
