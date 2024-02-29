<script>
import TodoInput from "./TodoInput.vue";
import TodoItemVue from "./TodoItem.vue";
export default {
  components: {
    TodoInput,
    TodoItemVue,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    abcTask(task) {
      this.tasks.push(task);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<template>
  <h1>Todo List</h1>
  <todo-input @abc="abcTask"></todo-input>
  <!-- <ol>
                <todo-item v-for="(task,index) in tasks" :xyz="task" @click="removeTask(index)"></todo-item>
            </ol> -->
</template>