<!--
@Author: xiaoke
@Descrition:
@Date: 2018/3/13 10:00
@Modified by:
@Modify time:
-->
<template>
  <div id="item">


    <div
      :class="{parent: hasChild, noChil:!hasChild}"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <i class="tabk" v-if="hasChild"></i>
      <span v-if="hasChild">[{{ open ? '-' : '+' }}]</span>
    </div>

    <div v-show="open" v-if="hasChild">
      <item
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      >
      </item>
      <span class="add" @click="addChild">+</span>
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
      }, // y有子节点 加粗变绿

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
    /*color: lightseagreen;*/
    background-color: skyblue;
    position: relative;

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
  .noChil{
    background-color: lightgoldenrodyellow;

  }
  .tabk{
    position: absolute;
    top:15px;
    left:-50px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 10px solid sandybrown;
    position: relative;
  }
</style>
