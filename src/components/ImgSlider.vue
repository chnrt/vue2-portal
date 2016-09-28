<template>
<slider @pre="pre" @next="next">
  <template v-for="(item, index) in pageList">
    <div
      class="slider-item"
      :style="pageList[index].style">
      <h1>{{ item.title }}</h1>
    </div>
  </template>
</slider>
</template>

<script>
import Slider from './Slider';

export default {
  data() {
    return {
      currentPage: 0,

      loop: null,

      someList: [{
        title: '1',
        img: 'testimg-1.png',
      }, {
        title: '2',
        img: 'testimg-2.png',
      }, {
        title: '3',
        img: 'testimg-3.png',
      }],
    };
  },

  computed: {
    pageList() {
      return this.someList.map((value, index) => {
        const pageInx = index - this.currentPage;

        // TODO: 无限滚动
        /* if ((this.currentPage === 0 && index === this.someList.length - 1) ||
          (index === this.currentPage - 1)) {
          pageInx = -1;
        } else if (index === this.currentPage) {
          pageInx = 0;
        } else if ((this.currentPage === this.someList.length - 1 && index === 0) ||
          (index === this.currentPage + 1)) {
          pageInx = 1;
        } else {
          pageInx = 2;
        }*/

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

<style scope>
h1 {
  margin: 0;
  font-size: 48px;
}
</style>