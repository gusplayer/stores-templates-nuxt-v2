export default function ({ $gtm, route, store }) {
  let tag_manager =
    store.state.analytics_tagmanager &&
    store.state.analytics_tagmanager.tag_manager
      ? store.state.analytics_tagmanager.tag_manager
      : ''

  $gtm.init(tag_manager)
}
