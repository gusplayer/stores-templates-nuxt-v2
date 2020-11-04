import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Drawer,
  Input,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
  Button,
  Tooltip,
  Alert,
  Row,
  Col,
  ColorPicker,
  Loading,
  Message,
  Tag,
  Steps,
  Step,
  Collapse,
  CollapseItem,
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
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
Vue.use(Tag)

locale.use(lang)
Vue.use(Loading.directive)

Vue.prototype.$message = Message
Vue.use(Steps)
Vue.use(Step)
Vue.use(Collapse)
Vue.use(CollapseItem)
