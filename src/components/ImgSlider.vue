<template>
<slider @pre="pre" @next="next" :height="height">
  <template v-for="(item, index) in pageList">
    <div
      class="slider-item"
      :style="pageList[index].style">
      <img :src="item.src">
    </div>
  </template>
</slider>
</template>

<script>
import Slider from './Slider';

export default {
  props: {
    imgList: Array,
  },

  data() {
    return {
      currentPage: 0,

      height: {
        height: '120px',
      },

      loop: null,

      pageList: [],
    };
  },

  methods: {
    changePage(direction) {
      let zIndex = 1;

      this.pageList = this.imgList.map((value, index) => {
        let pageInx;

        // 这么做是为了循环滚动
        if ((this.currentPage === 0 && index === this.imgList.length - 1) ||
          (index === this.currentPage - 1)) {
          pageInx = -1;
        } else if (index === this.currentPage) {
          pageInx = 0;
        } else if ((this.currentPage === this.imgList.length - 1 && index === 0) ||
          (index === this.currentPage + 1)) {
          pageInx = 1;
        } else {
          pageInx = 2;

          // 解决滚动过程中第一页滚动时闪烁问题
          if ((direction === 'next' &&
              this.currentPage === 1 &&
              index === this.imgList.length - 1) ||
            (direction === 'pre' &&
              this.currentPage === 0 &&
              index === 2)) {
            zIndex = 0;
          }
        }

        const newVl = value;
        newVl.style = {
          transform: `translateX(${pageInx * 100}%)`,
          'z-index': zIndex,
        };

        return newVl;
      });
    },

    pre() {
      if (this.currentPage > 0) {
        this.currentPage --;
      } else {
        this.currentPage = this.pageList.length - 1;
      }

      this.changePage('pre');
      this.initLoop();
    },

    next() {
      if (this.currentPage < this.pageList.length - 1) {
        this.currentPage ++;
      } else {
        this.currentPage = 0;
      }

      this.changePage('next');
      this.initLoop();
    },

    initLoop() {
      if (this.loop) {
        clearInterval(this.loop);
      }

      this.loop = setInterval(() => {
        this.next();
      }, 3000);
    },
  },

  components: {
    Slider,
  },

  mounted() {
    this.changePage('next');
    this.initLoop();
  },
};
</script>

<style scoped>
.slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>