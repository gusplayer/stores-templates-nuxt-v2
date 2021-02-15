import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app, store }) => {
  let analytics =
    store.state.analytics_tagmanager &&
    store.state.analytics_tagmanager.analytics
      ? store.state.analytics_tagmanager.analytics
      : ''
  let result = analytics.split('-')
  // if (process.env.NODE_ENV !== 'production') return
  if (result[0] == 'UA') {
    ;(function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r
      ;(i[r] =
        i[r] ||
        function () {
          ;(i[r].q = i[r].q || []).push(arguments)
        }),
        (i[r].l = 1 * new Date())
      ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(
      window,
      document,
      'script',
      'https://www.google-analytics.com/analytics.js',
      'ga'
    )
    ga('create', analytics, 'auto')
    ga('create', 'UA-92934137-1', 'auto', 'clientTracker')
    app.router.afterEach((to, from) => {
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
      ga('clientTracker.send', 'pageview', {
        page: location.host + location.pathname,
      })
    })
  } else {
    if (result[0] == 'G') {
      Vue.use(VueGtag, {
        config: { id: 'UA-92934137-1' },
        includes: [
          {
            id: analytics,
            params: {
              send_page_view: false,
            },
          },
        ],
      })
    }
  }
}
