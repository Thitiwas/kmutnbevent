import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Card from './components/Card.vue'
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'Card', path: '/Card', component: Card}
  ]
});

(function (d, s, id) {
  var js = d.getElementsByTagName(s)[0]
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = '//connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.8&appId=1289742844431009'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

new Vue({
  router,
  template: '<App/>',
  components: { App },
  el: '#app',
  render: h => h(App) // Start component App.vue
}).$mount('#app')
