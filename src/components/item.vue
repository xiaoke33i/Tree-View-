<!--
@Author: xiaoke
@Descrition:
@Date: 2018/3/13 10:00
@Modified by:
@Modify time:
-->
<template>
  <div id="item">
<div>
  <li>
    <div
      :class="{parent: hasChild}"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="hasChild">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="hasChild">
      <item
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      >
      </item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</div>

  </div>
</template>

<script >
  import Vue from 'vue'
  export default {
    name: 'item',
    props: {
      model: Object
    },
    data () {
      return {
        open: false
      }
    },
    computed: {

      hasChild(){
        return this.model.children && this.model.children.length
      } // y有子节点 加粗变绿

    },
    methods: {
      toggle() {
        if(this.hasChild){
          this.open=!this.open
          console.log(this.model)
        }
      },// 点击子列表展示或收起
      changeType() {
        if (!this.hasChild) {
          Vue.set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      addChild() {
        console.log(this.model)
        console.log(this.model.children)
        this.model.children.push({
          name: this.model['name']+'.'+(this.model.children.length+1)
        })
      },//

    }
  }
</script>

<style scoped>
  .item {
    csursor: pointer;
  }
  .parent {
    font-weight: bold;
    color: lightseagreen;
  }
  ul {
    /*padding-left: 1em;*/
    line-height: 1.5em;
    /*list-style-type: dot;*/
  }
  .add{
    color:pink;
  }
  .btn{
    margin-top: 10px;
    width: 100px;
    height: 20px;
    border:10px solid pink  ;
    border-radius: 10%;
  }
</style>
