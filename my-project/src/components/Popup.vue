<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/slot/dilog.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
