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
    };
  },

  computed: {
    pageList() {
      return this.imgList.map((value, index) => {
        let pageInx = index - this.currentPage;

        // TODO: 无限滚动闪烁BUG
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
        }

        const newVl = value;
        newVl.style = { transform: `translateX(${pageInx * 100}%)` };

        return newVl;
      });
    },
  },

  methods: {
    pre() {
      if (this.currentPage > 0) {
        this.currentPage --;
      } else {
        this.currentPage = this.pageList.length - 1;
      }

      this.initLoop();
    },

    next() {
      if (this.currentPage < this.pageList.length - 1) {
        this.currentPage ++;
      } else {
        this.currentPage = 0;
      }

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
    this.$nextTick(() => {
      this.initLoop();
    });
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