<template>
  <div class="mobile">
    <h1>{{ msg }}</h1>
    <div class="messages">
      <div class="message" v-for="message in messages" :key="message.id">
        <Message v-bind:message="message" v-on:delMessage="delMessage()" />
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Message
  },
  data() {
    return {
      messages: ["hello", "okay", "nice"]
    };
  },
  methods: {
    delMessage() {
      console.log(event.target);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile {
  width: 50%;
  height: 80vh;
  background: grey;
  h1 {
    background: rgb(212, 212, 212);
    padding: 10px;
  }
}
</style>
