<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <input type="text" v-model="valuedata" />
    <button @click="updata">올리기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valuedata: '',
    };
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    updata() {
      console.log(this.valuedata);
      this.$emit('setUpdate', this.valuedata);
    },
  },
};
</script>

<style></style>
