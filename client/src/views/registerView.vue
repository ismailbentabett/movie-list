<template>
  <div class="registerView">

    <register  />
  </div>
</template>

<script>
// @ is an alias to /src
import register from "@/components/register.vue";

export default {
  name: "registerView",
  components: {
    register
  }
};
</script>
