<template>
  <form @submit="submitData">
    <input type="text" v-model="task" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  props: ["xyz"],
  data() {
    return {
      task: "",
    };
  },
  methods: {
    submitData(e) {
      //取消預設事件
      e.preventDefault();

      // 把資料丟到上層使用$emit
      // this.$emit( `自訂事件`,傳值1)
      this.$emit(`abc`, this.task);
    },
  },
};
</script>

<style>
.item {
  background-color: white;
  font: 18px Calibri;
  margin: 5px;
  padding: 5px;
}

.item:hover {
  background-color: #cba;
  cursor: pointer;
}
</style>