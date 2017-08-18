import Keyboard from './Keyboard.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-responsive-keyboard', Keyboard);
  }
};
