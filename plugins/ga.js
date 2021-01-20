export default ({ app, store }) => {
  // UA-187827973-1
  // G-RXYSTGWVBW
  let analytics =
    store.state.analytics_tagmanager &&
    store.state.analytics_tagmanager.analytics
      ? store.state.analytics_tagmanager.analytics
      : ''
  let result = analytics.split('-')
  if (result[0] == 'UA') {
    if (process.env.NODE_ENV !== 'production')
      return /*
       ** Include Google Analytics Script
       */
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
    /*
     ** Set the current page
     */
    ga('create', analytics, 'auto')
    ga('create', 'UA-92934137-1', 'auto', 'clientTracker')
    /*
     ** Every time the route changes (fired on initialization too)
     */
    app.router.afterEach((to, from) => {
      /*
       ** We tell Google Analytics to add a `pageview`
       */
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
      // ga('clientTracker.send', 'pageview')
      // ga('send', 'pageview', {
      //   page: location.host + location.pathname,
      // })
      ga('clientTracker.send', 'pageview', {
        page: location.host + location.pathname,
      })
    })
  } else {
    if (result[0] == 'G') {
      window.dataLayer = window.dataLayer || []
      // eslint-disable-next-line no-inner-declarations
      function gtag() {
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', analytics)
    }
  }
}
