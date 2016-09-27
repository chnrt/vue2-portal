<template>
  <div class="main-content">
    <template v-for="item in results">
      <layout-box 
        :colWidthClass = "item.layout.colWidthClass"
        :colHeightPctClass = "item.layout.colHeightPctClass"
        :colOffsetLeftClass = "item.layout.colOffsetLeftClass"
        :colOffsetRightClass = "item.layout.colOffsetRightClass"
        :colMTClass = "item.layout.colMTClass"
        :colMRClass = "item.layout.colMRClass"
        :colMBClass = "item.layout.colMBClass"
        :colMLClass = "item.layout.colMLClass">

        <img-slider v-if="item.component.type=='slider'"></img-slider>

        <text-slider v-if="item.component.type=='text-slider'"></text-slider>

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

<!--     <img-slider></img-slider>
<text-slider></text-slider>

<bg-divider></bg-divider>

<text-box content="常用应用"></text-box>
<app-box
  v-for="(item, index) in appBoxs"
  :title="item.title">
</app-box>

<bg-divider></bg-divider> -->

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
      getImg(url) {
        return require(url); // eslint-disable-line
      },
    },
  };
</script>

<style>
  @import './assets/css/vendor.css';
  @import './assets/css/index.css';
</style>