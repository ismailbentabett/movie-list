<template>
  <div class="moviesListView">

    <moviesList />
  </div>
</template>

<script>
// @ is an alias to /src
import moviesList from "@/components/moviesList.vue";

export default {
  name: "moviesListView",
  components: {
    moviesList
  }
};
</script>
