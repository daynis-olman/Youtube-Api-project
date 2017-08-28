// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import VueYouTubeEmbed from 'vue-youtube-embed'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.config.productionTip = false
Vue.use(VueVideoPlayer)
Vue.use(VueYouTubeEmbed)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
