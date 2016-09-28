<template>
<slider :height="height">
  <template v-for="(item, index) in pageList">
    <div
      class="slider-item text-slider has-icon border-bottom-1 border-gray-e3 icon-border-round"
      :style="pageList[index].style">

      <a :href="item.url" class="text-slider-item touch-active">
        <div class="text-slider-icon">
          <img :src="item.imgsrc" />
        </div>
        <div class="text-slider-content font-gray-33">{{ item.text }}</div>
      </a>

    </div>
  </template>
</slider>
</template>

<script>
import Slider from './Slider';

export default {
  props: {
    layout: Object,
    ntdata: Array,
  },

  data() {
    return {
      currentPage: 0,

      height: {
        height: '40px',
      },

      loop: null,
    };
  },

  computed: {
    pageList() {
      return this.ntdata.map((value, index) => {
        let pageInx = index - this.currentPage;

        // TODO: 无限滚动闪烁BUG
        if ((this.currentPage === 0 && index === this.ntdata.length - 1) ||
          (index === this.currentPage - 1)) {
          pageInx = 1;
        } else if (index === this.currentPage) {
          pageInx = 0;
        } else if ((this.currentPage === this.ntdata.length - 1 && index === 0) ||
          (index === this.currentPage + 1)) {
          pageInx = -1;
        } else {
          pageInx = -2;
        }

        const newVl = value;
        newVl.style = { transform: `translateY(${pageInx * 100}%)` };

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
      }, 5000);
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
a {
  position: relative;
  background-color: rgb(255, 255, 255);
  color: rgb(85, 26, 139);
  cursor: auto;
  display: table;
  height: 42px;
  margin: 0px;
  padding-bottom: 0px;
  padding-left: 42px;
  padding-right: 8px;
  padding-top: 0px;
}
a .text-slider-icon {
  position: absolute;
  width: 0.26rem;
  height: 0.26rem;
  top: 50%;
  margin: 0;
  margin-top: -0.13rem;
  left: 0.08rem;
  overflow: hidden;
  font-size: 0;
  padding: 0;
  display: block;
}
a .text-slider-content {
  display: table-cell;
  width: 100%;
  height: 100%;
  overflow: hidden;
  line-height: 0.126rem;
  font-size: 0.0924rem;
  white-space: normal;
  text-align: justify;
  vertical-align: middle;
}
</style>
