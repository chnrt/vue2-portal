<template>
<a :href="url" class="appbox touch-active border-gray-e3 border-right-1 border-bottom-1">
  <div class="appicon full-img">
    <img :src="iconsrc">
    <div class="dot"></div>
  </div>
  <div class="apptitle">{{ title }}</div>
</a>
</template>

<script>
  export default {
    name: 'app-box',

    props: {
      url: String,
      iconsrc: String,
      title: String,
    },
  };
</script>