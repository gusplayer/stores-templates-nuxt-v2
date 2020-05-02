import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Drawer,
  Input,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  Button,
  Tooltip,
  Alert,
  Row,
  Col,
  ColorPicker,
  Loading
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Row)
Vue.use(Col)
Vue.use(ColorPicker)

locale.use(lang)
Vue.use(Loading.directive)
