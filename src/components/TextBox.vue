<template>
  <div class="col-1of1">
    <div class="col-content">
      <!--边框、背景色、字体颜色等组件共有参数：-->
      <!--border-gray-e3 边框颜色，详见下方颜色对照部分-->
      <!--border-top-{n} 上边框宽度n(px), n范围1px 到 10px-->
      <!--border-right-{n} 右边框-->
      <!--border-bottom-{n} 下边框-->
      <!--border-left-{n} 左边框-->
      <!--bg-white 背景色，详见下方颜色对照部分-->
      <!--font-gray-33 字体颜色，，详见下方颜色对照部分-->
      <div class="textbox border-gray-e3 border-top-1 border-bottom-1">
        <div class="textbox-content">{{content}}</div>
      </div>
    </div>
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