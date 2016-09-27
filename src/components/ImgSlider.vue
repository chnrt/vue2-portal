<template>
<slider :pages="someList" :slide="slide">

    <!-- slot  -->
    <template v-for="(item, index) in someList">
      <div 
        class="slider-item" 
        :style="someList[index].style">
        <h1>{{item.title}}</h1>
      </div>
    </template>

</slider>
</template>

<script>
import Slider from './Slider';

export default {
  data() {
    return {
      someList: [{
        title: '1',
        img: 'testimg-1.png',
        // slide init
        origin: 0,
        current: 0,
        style: {
          'background-image': 'url(dist/testimg-1.png)',
          'background-size': 'cover',
          // transform
          transform: 'translateX(0%)',
        },
      }, {
        title: '2',
        img: 'testimg-2.png',

        origin: 100,
        current: 0,
        style: {
          'background-image': 'url(dist/testimg-2.png)',
          'background-size': 'cover',
          transform: `translateX(${100}%)`,
        },
      }, {
        title: '3',
        img: 'testimg-3.png',
        origin: 200,
        current: 0,
        style: {
          'background-image': 'url(dist/testimg-3.png)',
          'background-size': 'cover',
          transform: `translateX(${200}%)`,
        },
      }],
      slide: {
        init: {
          pageNum: 3,
          currentPage: 1,
          canPre: false,
          canNext: true,
          start: {},
          end: {},
          tracking: false,
          thresholdTime: 500,
          thresholdDistance: 100,
        },
      },
    };
  },

  components: {
    Slider,
  },
};
</script>