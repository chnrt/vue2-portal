<template>
<div class="textbox border-gray-e3 border-top-1 border-bottom-1">
  <div class="textbox-content">{{content}}</div>
</div>
</template>

<script>
  export default {
    name: 'text-box',

    props: {
      content: String,
    },
  };
</script>