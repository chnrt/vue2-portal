<template>
  <div class="col-1of1">
    <div class="col-content">
      <!--.has-icon 带图标-->
      <!--.anim-h 水平切换动画-->
      <!--.text-center 文字水平居中-->
      <!--.text-right 文字水平靠右-->
      <!--.icon-border-round 圆角-->
      <!--.icon-border-capsule 圆形图标-->
      <!--.type-2 类型2：单行-->
      <!--.type-3 类型3：增大-->
      <ul class="text-slider has-icon border-bottom-1 border-gray-e3 icon-border-round">
        <li><a href="#" class="text-slider-item touch-active">
            <div class="text-slider-icon"><img src="images/成绩发布.png"></div>
            <div class="text-slider-content font-gray-33">伴行3618希望做一些改变，让我们在一起，用科技的力量诠释关爱·教育·成长。</div></a></li>
        <li><a href="#" class="text-slider-item touch-active">
            <div class="text-slider-icon"><img src="images/通知公告.png"></div>
            <div class="text-slider-content font-gray-33">用科技的力量诠释关爱·教育·成长,伴行3618希望做一些改变，让我们在一起。</div></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'text-slider',
  };
</script>
