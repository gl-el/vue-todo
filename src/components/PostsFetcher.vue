<script>
export default {
  name: "PostsFetcher",
  data: function () {
    return {
      posts: null,
    };
  },
  methods: {
    async getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      this.posts = await response.json();
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<template>
  <div class="posts">
    <div v-if="!posts">Loading...</div>
    <div v-else v-for="post in posts" :key="post.id" class="post">
      <h2 class='green'>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.post {
  width: 500px;
}
</style>
