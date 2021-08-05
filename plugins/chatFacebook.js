import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
export default ({ store }) => {
  let chat_facebook =
    store.state.analytics_tagmanager != null &&
    store.state.analytics_tagmanager.facebook_chat
      ? store.state.analytics_tagmanager.facebook_chat
      : ''
  if (chat_facebook) {
    Vue.use(VueFbCustomerChat, {
      page_id: chat_facebook,
      locale: 'es_CO',
    })
  }
}
