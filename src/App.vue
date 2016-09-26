<template>
  <div class="main-content">
    <img-slider></img-slider>
    <text-slider></text-slider>

    <bg-divider></bg-divider>

    <text-box content="常用应用"></text-box>
    <app-box></app-box>

    <bg-divider></bg-divider>

    <div class="col-1of1">
      <div class="col-content">
        <div style="height:2.8rem;" class="iframebox border-gray-e3 border-bottom-1 border-top-1">
          <iframe width="100%" height="100%" src="http://echarts.baidu.com/gallery/editor.html?c=bar-tick-align"></iframe>
        </div>
      </div>
    </div>

    <bg-divider></bg-divider>

    <div class="col-1of2 col-offsetleft-1of2 col-ml-4 col-mr-8">
      <div class="col-content">
        <!--.bx-btn-medium .bx-btn-large 中、大 按钮-->
        <!--.border-round 圆角-->
        <!--.border-capsule 胶囊形-->
        <!--.type-2 图标靠左-->
        <!--.type-3 图标靠右-->
        <!--.type-4 图标在上文字在下-->
        <!--.has-icon 有图标-->
        <div class="bx-btn touch-active has-icon border-capsule bg-blue-ocean font-white">
          <div class="bx-icon"><i class="fa fa-search"></i></div>
          <div class="bx-text">按钮</div>
        </div>
      </div>
    </div>
    <bg-divider></bg-divider>

    <foot-bar></foot-bar>
    <div class="footbar-space"></div>
  </div>
</template>

<script>
  import ImgSlider from 'components/ImgSlider';
  import TextSlider from 'components/TextSlider';
  import BgDivider from 'components/BgDivider';
  import TextBox from 'components/TextBox';
  import AppBox from 'components/AppBox';
  import FootBar from 'components/FootBar';

  export default {
    name: 'app',

    components: {
      ImgSlider,
      TextSlider,
      BgDivider,
      TextBox,
      AppBox,
      FootBar,
    },
  };
</script>

<style>
  @import './assets/css/vendor.css';
  @import './assets/css/index.css';
</style>