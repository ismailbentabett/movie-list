<template>
  <div class="AccountView">

    <Account  />
  </div>
</template>

<script>
// @ is an alias to /src
import Account from "@/components/Account.vue";

export default {
  name: "AccountView",
  components: {
    Account
  }
};
</script>
