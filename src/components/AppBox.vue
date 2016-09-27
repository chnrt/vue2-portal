<template>
<div class="col-1of4 col-hp-1of1">
  <div class="col-content">
    <a href="#" class="appbox touch-active border-gray-e3 border-right-1 border-bottom-1">
      <div class="appicon full-img">
        <img src="../assets/images/教学计划.png">
        <div class="dot"></div>
      </div>
      <div class="apptitle">{{ title }}</div>
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: 'app-box',

    props: {
      title: String,
    },
  };
</script>