<script>
import TodoInputVue from "./TodoInput.vue";
import TodoItemVue from "./TodoItem.vue";
export default {
  comments: {
    TodoInputVue,
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
    <h1>Todo List123`</h1>
    <h1>家來了</h1>
            <todo-input @abc="abcTask"></todo-input>
            <ol>
                <todo-item v-for="(task,index) in tasks" :xyz="task" @click="removeTask(index)"></todo-item>
            </ol>
</template>