<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <input type="text" v-model="valuedata" />
    <button @click="updata">올리기</button>
    <Products :datas="datas" />
  </div>
</template>

<script>
import datas from '../api/game.json';
import Products from '@/components/productList/Products.vue';

export default {
  data() {
    return {
      valuedata: '',
      datas: datas.list,
    };
  },
  components: {
    Products,
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
