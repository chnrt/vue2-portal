<template>
  <div class="footbar">
    <div class="footbar-content">

      <template v-for="item in footers">
        <a class="col-1of5" :href="item.url">
          <div class="footbar-btn touch-active" :class="item.sel">
            <div class="footbar-btn-icon">
              <i class="iconfont" :class="[item.icon]"></i>
            </div>
            <div class="footbar-btn-text">{{ item.name }}</div>
          </div>
        </a>
      </template>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'foot-bar',

    props: ['footers'],
  };
</script>