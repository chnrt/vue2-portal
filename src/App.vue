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
        :iconsrc="item.component.data.iconsrc"
        :url="item.component.data.url"
        :title="item.component.data.name">
      </app-box>

    </layout-box>
  </template>

  <foot-bar :footers="footers"></foot-bar>
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

function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

const corpId = getQueryString('corpId') || 'wxdc8bcb7e3fcd7028';

export default {
  name: 'app',

  data() {
    return {
      results: results[corpId].content,

      footers: results[corpId].footers,
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
};
</script>

<style>
@import './assets/css/vendor.css';
@import './assets/css/index.css';
</style>