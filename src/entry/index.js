import "@/assets/lib"
import Vue from 'vue';
import router from '@/router';
import App from '@/pages/App';
// 校验框架
new Vue({
  el: "#app",
  router,
  template: '<App/>',
  components: { App }
});
