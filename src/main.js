// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// inject a handler for `myOption` custom option
/* eslint no-underscore-dangle :0*/
/* eslint no-console :0*/

// Create a global mixin
Vue.mixin({
  mounted() { // each component will execute this function after mounted
    if (!this.$children) {
      return;
    }

    for (const child of this.$children) { // iterate each child component
      if (child.$options._propKeys) {
        for (const propKey of child.$options._propKeys) { // iterate each child's props
          // if current component has a property named equal to child prop key
          if (Object.prototype.hasOwnProperty.call(this, propKey)) {
            // update child prop value
            this.$set(child, propKey, this[propKey]);

            // create a watch to update value again every time that parent property changes
            this.$watch(propKey, (newValue) => {
              this.$set(child, propKey, newValue);
            });
          }
        }
      }
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
