<!--
@Author: xiaoke
@Descrition:
@Date: 2018/3/13 10:00
@Modified by:
@Modify time:
-->
<template>
  <div id="tree">
 <div>
   <item
   :model="treeData">
   </item>
 </div>
  </div>
</template>

<script >
  //import Item from './item'
  export default {
    name: 'tree',
    //components: {Item},
    data() {
      return {
        treeData: {
          name: '1',
          children: [
            { name: '1.1' },
            { name: '1.2' },
            {
              name: '1.3',
              children: [
                {
                  name: '1.3.1',
                  children: [
                    { name: '1.3.1.1' },
                    { name: '1.3.1.2' }
                  ]
                },
                { name: '1.3.2' },
                { name: '1.3.3' },
                {
                  name: '1.3.4',
                  children: [
                    { name: '1.3.4.1' },
                    { name: '1.3.4.2' }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    filters: {},
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>
.tree{
padding-left:10px;
}
</style>
