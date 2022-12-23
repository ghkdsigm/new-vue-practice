<template>
  <div>
    <nav>
      <ul class="menu">
        <li class="menu--item" v-for="(item, i) in menu" :key="i">
          <a :href="'/' + item">{{ item }}</a>
        </li>
      </ul>
    </nav>
    <div>
      <ul>
        <li v-for="(item, index) of people" :key="index">
          {{ item.job }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Menu',
  props: {
    menu: Array,
    people: Array,
  },
};
</script>

<style>
.menu {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  background: steelblue;
  list-style: none;
}

.menu--item {
  padding: 10px;
}

.menu--item a {
  color: white;
  text-decoration: none;
}
</style>
