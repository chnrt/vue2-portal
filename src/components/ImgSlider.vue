<!-- <template>
  <div class="abs-content">
    <div class="slider-content">
      <div class="slider">
        <a href="#" class="item"><img src="images/s1.jpg"></a>
        <a href="#" class="item"><img src="images/s2.jpg"></a>
      </div>
    </div>
  </div>
</template> -->
<template>
  <slider :pages="someList" :sliderinit="sliderinit">
    <!-- slot  -->
  </slider>
</template>

<script>
import Slider from './Slider';

export default {
  name: 'img-slider',

  data() {
    return {
      // 图片列表[arr]
      someList: [{
        title: 'slide1',
        style: {
          background: '#4bbfc3',
        },
      }, {
        title: 'slide2',
        style: {
          background: '#4bbfc3',
        },
      }, {
        title: 'slide3',
        style: {
          background: '#4bbfc3',
        },
      }],

     // 滑动配置[obj]
      sliderinit: {
        currentPage: 0,
        start: {},
        end: {},
        tracking: false,
        thresholdTime: 500, // 滑动判定距离
        hresholdDistance: 100, // 滑动判定时间
        autoplay: 2000, // 自动滚动[ms]
        loop: true, // 循环滚动
      },
    };
  },

  components: {
    Slider,
  },
};
</script>