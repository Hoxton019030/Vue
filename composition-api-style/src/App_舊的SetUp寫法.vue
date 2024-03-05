<script>
import {ref } from 'vue'

export default {
  setup() {
    const name = ref('Peter')
    const age = ref(40)

    const birthday = ()=>{ age.value++}

    return {
      name,age,birthday
    }
  },
}
</script>

<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <h3 class="age">{{ age }}</h3>
    <button @click="birthday"> Happy Birthdat</button>
  </div>
</template>

<style>

.name{
  font-size: 25px;
  color:red
}

.age{
  color: steelblue;
}
</style>