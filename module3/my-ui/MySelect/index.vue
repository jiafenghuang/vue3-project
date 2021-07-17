<template>
  <div class="my-select">
    <div class='result'
    @click='openOptions'
    >{{data[curIdx].text}}</div>
    <div class='options' v-show='optionShow'>
      <div
      class="option"
      v-for="(item,index) of data"
      :key="item.id"
      @click="setOption(index,item)"
      >
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  import {reactive,toRefs} from 'vue'
export default {
  name:'MySelect',
  /*
  <my-select
    :data="data"
    :currentIndex="curIdx"
    :callback="setOption"
    >
  </my-select>
  */
  props:{
    data:Array,
    currentIndex:{
      type:Number,
      default:0
    },
    callback:Function
  },
  setup(props){
    const state = reactive({
      data:props.data,
      curIdx:props.currentIndex,
      optionShow:true
    })
    const setOption =(index,item)=>{
      state.curIdx = index
      state.optionShow = false
      props.callback(index,item)
    }
    const openOptions=()=>{
      state.optionShow = true
    }
    return {
      ...toRefs(state),
      setOption,
      openOptions
    }
  }
}
</script>

