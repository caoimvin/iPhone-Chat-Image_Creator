<template>
  <div class="message">
    <p>{{message}}</p>
    <div @click="$emit('delMessage',this.message.id)" class="del-btn">X</div>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  justify-content: space-between;
  background: honeydew;
  padding: 5px 20px;
  .del-btn {
    // margin: 5px;
    background: red;
    color: white;
    padding: 5px;
  }
}
</style>