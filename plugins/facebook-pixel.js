/* eslint-disable no-undef */
export default ({ app, store }) => {
  let pixel_facebook =
    store.state.analytics_tagmanager != null &&
    store.state.analytics_tagmanager.pixel_facebook
      ? store.state.analytics_tagmanager.pixel_facebook
      : ''
  if (process.browser && pixel_facebook) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    )
    fbq('init', pixel_facebook)
    // app.router.afterEach((to, from) => {
    // fbq('track', 'ViewContent', { descripcion: 'PageHome' })
    // })
  }
}
