<template>
  <div>
    <my-select
    :data="data"
    :currentIndex="curIdx"
    :callback="setOption"
    >
    </my-select>
  </div>
</template>

<script>
// import MySelect from '../module3/my-ui/MySelect/index.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  // components: {
  //   MySelect
  // },
  setup(props) {
    const curIdx = ref(0)
    const data =[
      {
        id:1,
        value:'orange',
        text:'橙子'
      },
      {
        id:2,
        value:'apple',
        text:'苹果'
      }
    ]
    const setOption = (index,item)=>{
      console.log(`index,item`, index,item)
    }
    return {
      curIdx,
      data,
      setOption
    }
  }
}
</script>
