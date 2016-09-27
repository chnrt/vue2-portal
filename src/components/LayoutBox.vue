<template>
  <div :class="[colWidthClass, colHeightPctClass, colOffsetLeftClass, colOffsetRightClass, colMTClass, colMRClass, colMBClass, colMLClass]">
    <div class="col-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout-box',

    props: {
      colWidthClass: { type: String, default: '' },
      colHeightPctClass: { type: String, default: '' },
      colOffsetLeftClass: { type: String, default: '' },
      colOffsetRightClass: { type: String, default: '' },
      colMTClass: { type: String, default: '' },
      colMRClass: { type: String, default: '' },
      colMBClass: { type: String, default: '' },
      colMLClass: { type: String, default: '' },
    },
  };
</script>