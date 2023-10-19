<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: "string",
  },
};
</script>

<style scoped>
.message-container {
  color: #fff;
  background: green;
  border: none;
  border-radius: 5px;
  max-width: 400px;
  padding: 0px 5px;
  height: 30px;
  font-size: 18px;
  margin: 5px auto;
  text-align: center;
}
</style>