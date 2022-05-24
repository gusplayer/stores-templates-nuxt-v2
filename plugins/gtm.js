export default function ({ $gtm, store }) {
  let tag_manager =
    store.state.analytics_tagmanager &&
    store.state.analytics_tagmanager.tag_manager
      ? store.state.analytics_tagmanager.tag_manager
      : ''
  if (tag_manager) {
    $gtm.init(tag_manager)
  }
}
