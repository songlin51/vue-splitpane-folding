import Splitpane from './split-pane/index.vue'
import "./assets/icon/iconfont.css"
export default Splitpane

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('split-pane', Splitpane)
}
