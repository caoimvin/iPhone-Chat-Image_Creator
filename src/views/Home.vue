<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="homediv">
      <Settings />
      <Phone />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Phone from "@/components/Phone.vue";
import Settings from "@/components/Settings.vue";

export default {
  name: "Home",
  components: {
    Phone,
    Settings,
  },
};
</script>

<style lang="scss">
.homediv {
  width: 60vw;
  display: flex;
  margin: 0 auto;
}

#settings {
  margin-right: 50px;
}
</style>
