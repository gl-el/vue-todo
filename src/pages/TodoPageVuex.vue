<script>
import TodoListVuex from "@/components/TodoListVuex.vue";
import AddTodoVuex from "@/components/AddTodoVuex.vue";
import { mapGetters } from "vuex";
import FilterTodos from "@/components/FilterTodos.vue";

export default {
  name: "TodoPageVuex",
  components: { FilterTodos, AddTodoVuex, TodoListVuex },
  data() {
    return {
      selectedFilter: "all",
    };
  },
  computed: {
    ...mapGetters("todos", ["allTodos", "completedTodos", "activeTodos"]),
    filteredTodos() {
      switch (this.selectedFilter) {
        case "all":
          return this.allTodos;
        case "completed":
          return this.completedTodos;
        case "active":
          return this.activeTodos;
        default:
          return this.allTodos;
      }
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <AddTodoVuex />
    <TodoListVuex :todos="filteredTodos" />
    <FilterTodos @select="selectFilter" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
</style>
