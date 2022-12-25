<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <input type="text" v-model="valuedata" />
    <button @click="updata">올리기</button>
    <Products :datas="datas" />
    <Child>SLOT</Child>
    <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>타이틀이당1</h3>
        </template>
        <template #body>
          <h3>바디당1</h3>
        </template>
        <template #footer>
          <h3>푸터당1</h3>
        </template>
        <template #close></template>
      </modal>
    </div>
  </div>
</template>

<script>
import datas from '../api/game.json';
import Products from '@/components/productList/Products.vue';
import Child from '@/components/slot/slot.vue';
import Modal from '@/components/slot/dilog.vue';

export default {
  data() {
    return {
      valuedata: '',
      datas: datas.list,
      showModal: false,
    };
  },
  components: {
    Products,
    Child,
    Modal,
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
