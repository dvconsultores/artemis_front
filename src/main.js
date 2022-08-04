import Vue from 'vue'
import App from './App.vue'
import {i18n} from '@/plugins/i18n'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueAnimateOnScroll from 'vue-animate-onscroll';
import VueApexCharts from 'vue-apexcharts'
import { PdfViewerPlugin } from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(VueAnimateOnScroll);

Vue.use(VueAxios,axios);
axios.defaults.baseURL='https://www.artemis-edu.com/artemis-edu/'

Vue.use(Toast);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App), store
}).$mount('#app')
