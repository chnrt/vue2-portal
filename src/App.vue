<template>
  <div class="main-content">
    <img-slider></img-slider>
    <text-slider></text-slider>

    <bg-divider></bg-divider>

    <text-box content="常用应用"></text-box>
    <app-box
      v-for="(item, index) in appBoxs"
      :title="item.title">
    </app-box>

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

    data() {
      return {
        appBoxs: [{
          title: '成绩发布',
        }, {
          title: '教学计划',
        }, {
          title: '圈子',
        }, {
          title: '通知公告',
        }, {
          title: '问卷调查',
        }, {
          title: '选课',
        }],
      };
    },

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