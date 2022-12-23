<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in datas" :key="index">
        {{ item }}
        <p :class="{ active: item.class }">
          제목 : <span :style="{ color: item.color }">{{ item.title }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    datas: Array,
  },
};
</script>

<style></style>
