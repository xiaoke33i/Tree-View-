import item from './item'
import tree from './tree'
import HelloWorld from './HelloWorld'
import Vue from 'vue'
const components=[
  item,
  tree,
  HelloWorld
]
const install=function(){
  components.map(component=>{
    Vue.component(component.name,component)
  })
 // Vue.prototype.$yg_tooltip = ygTooltip.installToolTip
}
export default {
  install
}
