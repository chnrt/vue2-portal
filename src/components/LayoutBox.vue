<template>
  <div :class="[layout.colWidthClass, layout.colHeightPctClass, layout.colOffsetLeftClass, layout.colOffsetRightClass, layout.colMTClass, layout.colMRClass, layout.colMBClass, layout.colMLClass]">
    <div class="col-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout-box',

    props: {
      layout: Object,
    },
  };
</script>