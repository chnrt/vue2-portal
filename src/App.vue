<template>
<div class="main-content">
  <template v-for="item in results">
    <layout-box :layout="item.layout">

      <img-slider
        v-if="item.component.type=='slider'"
        :imgList="item.component.data">
      </img-slider>

      <text-slider
        v-if="item.component.type=='text-slider'"
        :layout="item.component.layout"
        :ntdata="item.component.data">
      </text-slider>

      <bg-divider v-if="item.component.type=='divider'"></bg-divider>

      <text-box
        v-if="item.component.type=='textbox'" 
        :content="item.component.data.text">
      </text-box>

      <app-box
        v-if="item.component.type=='appbox'"
        :iconsrc="getImg(item.component.data.iconsrc)"
        :href="item.component.data.url"
        :title="item.component.data.name">
      </app-box>

    </layout-box>
  </template>

  <foot-bar></foot-bar>
  <div class="footbar-space"></div>
</div>
</template>

<script>
import results from './mock';
import LayoutBox from 'components/LayoutBox';
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
      results,
    };
  },

  components: {
    LayoutBox,
    ImgSlider,
    TextSlider,
    BgDivider,
    TextBox,
    AppBox,
    FootBar,
  },

  methods: {
    getImg: url => require(url), // eslint-disable-line
  },
};
</script>

<style>
@import './assets/css/vendor.css';
@import './assets/css/index.css';
</style>