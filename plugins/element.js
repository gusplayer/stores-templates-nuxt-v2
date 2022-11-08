import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Drawer,
  Input,
  Carousel,
  CarouselItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Message,
  Tag,
  Collapse,
  CollapseItem,
  Skeleton,
  SkeletonItem,
  Tabs,
  TabPane,
  // Select,
  // Option,
  // Button,
  // Tooltip,
  // Alert,
  // Row,
  // Col,
  // ColorPicker,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Steps,
  // Step,
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(Loading.directive)
Vue.prototype.$message = Message
locale.use(lang)
Vue.use(Tag)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Skeleton)
Vue.use(SkeletonItem)

Vue.use(Tabs)
Vue.use(TabPane)
// Vue.use(Checkbox)
// Vue.use(CheckboxButton)
// Vue.use(CheckboxGroup)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Button)
// Vue.use(Tooltip)
// Vue.use(Alert)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(ColorPicker)
// Vue.use(Steps)
// Vue.use(Step)
