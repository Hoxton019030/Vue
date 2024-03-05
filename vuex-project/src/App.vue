<template>
  <button @click="update">Add</button>
  <h3>{{ count }}</h3>
</template>

<script>
import { computed } from 'vue'
import store from '@/store/index'

export default {
  setup(){
    const count = computed(()=> store.state.count)
    const update =()=> store.commit('updateStore',5)
    return{
      count,
      update
    }
  }
}
</script>

