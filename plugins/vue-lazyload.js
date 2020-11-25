import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loading from '../assets/img/lazyLoanding.svg'
import error from '../assets/img/lazyloadError.jpg'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  error: error,
  loading: loading,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  // listenEvents: ['scroll'],
})
