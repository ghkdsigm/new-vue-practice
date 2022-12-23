<template>
  <li class="product">
    <img :src="product.img" />
    <div class="product--content">
      <h3 class="content--title">{{ product.title }}</h3>
      <div class="content--price">상품가 : {{ product.price }} 원</div>
    </div>
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  props: {
    product: Object,
  },
  data() {
    return {
      computedValue: '',
      text: '이 유일한 값입니다.',
    };
  },
  mounted() {
    this.computedValue = this.product.price;
    if (this.computedValue > 50000) {
      console.log(this.computedValue);
    }
  },
};
</script>

<style>
.product {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 10px;
}

.product--content {
  margin-left: 10px;
}
</style>
