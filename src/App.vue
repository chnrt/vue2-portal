<template>
  <div class="main-content">
    <!--布局各项参数对应的css class:-->
    <!--col-{i}of{j} : i/j宽度-->
    <!--col-hp-{i}of{j} : 高/宽 = i/j-->
    <!--col-offsetleft-{i}of{j} : 左偏移i/j宽度-->
    <!--col-offsetright-{i}of{j} : 右偏移i/j宽度-->
    <!--col-mt-{n} : margin-top n个单位（n 范围从0到50，即0.0rem到0.5rem, 在320px宽度下0.01rem = 1px)-->
    <!--col-ml-{n} : margin-left ...-->
    <!--col-mb-{n} : margin-bottom ...-->
    <!--col-mr-{n} : margin-right ...-->
    <div class="col-1of1 col-hp-3of10">
      <div class="col-content">
        <div class="abs-content">
          <div class="slider-content">
            <div class="slider"><a href="#" class="item"><img src="images/s1.jpg"></a><a href="#" class="item"><img src="images/s2.jpg"></a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <!--.has-icon 带图标-->
        <!--.anim-h 水平切换动画-->
        <!--.text-center 文字水平居中-->
        <!--.text-right 文字水平靠右-->
        <!--.icon-border-round 圆角-->
        <!--.icon-border-capsule 圆形图标-->
        <!--.type-2 类型2：单行-->
        <!--.type-3 类型3：增大-->
        <ul class="text-slider has-icon border-bottom-1 border-gray-e3 icon-border-round">
          <li><a href="#" class="text-slider-item touch-active">
              <div class="text-slider-icon"><img src="images/成绩发布.png"></div>
              <div class="text-slider-content font-gray-33">伴行3618希望做一些改变，让我们在一起，用科技的力量诠释关爱·教育·成长。</div></a></li>
          <li><a href="#" class="text-slider-item touch-active">
              <div class="text-slider-icon"><img src="images/通知公告.png"></div>
              <div class="text-slider-content font-gray-33">用科技的力量诠释关爱·教育·成长,伴行3618希望做一些改变，让我们在一起。</div></a></li>
        </ul>
      </div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <div style="height:0.08rem;" class="divider bg-gray-eb"></div>
      </div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <!--边框、背景色、字体颜色等组件共有参数：-->
        <!--border-gray-e3 边框颜色，详见下方颜色对照部分-->
        <!--border-top-{n} 上边框宽度n(px), n范围1px 到 10px-->
        <!--border-right-{n} 右边框-->
        <!--border-bottom-{n} 下边框-->
        <!--border-left-{n} 左边框-->
        <!--bg-white 背景色，详见下方颜色对照部分-->
        <!--font-gray-33 字体颜色，，详见下方颜色对照部分-->
        <div class="textbox border-gray-e3 border-top-1 border-bottom-1">
          <div class="textbox-content">常用应用</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-hp-1of2">
      <div class="col-content">
        <!--.has-dot 有红点-->
        <!--.has-new 有'new'角标-->
        <!--.border-round 圆角-->
        <!--.border-round2x 2倍圆角--><a href="#" class="appbox touch-active has-dot has-new border-gray-e3 border-right-1 border-bottom-1">
          <div class="new-tag"></div>
          <div class="appicon full-img"><img src="images/成绩发布.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">成绩发布</div></a>
      </div>
    </div>
    <div class="col-1of4 col-hp-1of1">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-right-1 border-bottom-1">
          <div class="appicon full-img"><img src="images/教学计划.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">教学计划</div></a></div>
    </div>
    <div class="col-1of4 col-hp-1of1">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-bottom-1">
          <div class="appicon full-img"><img src="images/圈子.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">圈子</div></a></div>
    </div>
    <div class="col-1of3 col-hp-1of1">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-bottom-1 border-right-1">
          <div class="appicon full-img"><img src="images/通知公告.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">通知公告</div></a></div>
    </div>
    <div class="col-2of3 col-hp-1of2">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-bottom-1">
          <div class="appicon full-img"><img src="images/教学计划.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">教学计划</div></a></div>
    </div>
    <div class="col-1of3 col-hp-2of3">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-right-1 border-bottom-1">
          <div class="appicon full-img"><img src="images/圈子.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">圈子</div></a></div>
    </div>
    <div class="col-1of3 col-hp-2of3">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-right-1 border-bottom-1">
          <div class="appicon full-img"><img src="images/成绩发布.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">成绩发布</div></a></div>
    </div>
    <div class="col-1of3 col-hp-2of3">
      <div class="col-content"><a href="#" class="appbox touch-active border-gray-e3 border-bottom-1">
          <div class="appicon full-img"><img src="images/通知公告.png">
            <div class="dot"></div>
          </div>
          <div class="apptitle">通知公告</div></a></div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <div style="height:0.08rem;" class="divider bg-gray-eb"></div>
      </div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <div style="height:2.8rem;" class="iframebox border-gray-e3 border-bottom-1 border-top-1">
          <iframe width="100%" height="100%" src="http://echarts.baidu.com/gallery/editor.html?c=bar-tick-align"></iframe>
        </div>
      </div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <div style="height:0.08rem;" class="divider bg-gray-eb"></div>
      </div>
    </div>
    <div class="col-1of2 col-offsetleft-1of2 col-ml-4 col-mr-8">
      <div class="col-content">
        <!--.bx-btn-medium .bx-btn-large 中、大 按钮-->
        <!--.border-round 圆角-->
        <!--.border-capsule 胶囊形-->
        <!--.type-2 图标靠左-->
        <!--.type-3 图标靠右-->
        <!--.type-4 图标在上文字在下-->
        <!--.has-icon 有图标-->
        <div class="bx-btn touch-active has-icon border-capsule bg-blue-ocean font-white">
          <div class="bx-icon"><i class="fa fa-search"></i></div>
          <div class="bx-text">按钮</div>
        </div>
      </div>
    </div>
    <div class="col-1of1">
      <div class="col-content">
        <div style="height:0.08rem;" class="divider bg-gray-eb"></div>
      </div>
    </div>
    <div class="col-1of1 col-mb-8 col-ml-8 col-mr-8 col-mt-8">
      <div class="col-content">
        <div class="textbox">
          <div class="textbox-content">
             
            颜色对照：背景色、边框颜色、字体颜色使用同一套颜色组合，比如海蓝色，背景色class名为
            .bg-blue-ocean，则边框颜色class为.border-blue-ocean，字体颜色class为.font-blue-ocean。
            颜色组合如下：
          </div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-white">
          <div class="textbox-content font-gray-33">.bg-white<br>#ffffff</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-black">
          <div class="textbox-content font-white">.bg-black<br>#000000</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray">
          <div class="textbox-content font-gray-33">.bg-gray<br>#e5e5e5</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-cascade">
          <div class="textbox-content font-white">.bg-gray-cascade<br>#95a5a6</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-silver">
          <div class="textbox-content font-gray-33">.bg-gray-silver<br>#bfbfbf</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-cararra">
          <div class="textbox-content font-gray-33">.bg-gray-cararra<br>#fafafa</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-gallery">
          <div class="textbox-content font-white">.bg-gray-gallery<br>#555555</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-f9">
          <div class="textbox-content font-gray-33">.bg-gray-f9<br>#f9f9f9</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-f5">
          <div class="textbox-content font-gray-33">.bg-gray-f5<br>#f5f5f5</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-f0">
          <div class="textbox-content font-gray-33">.bg-gray-f0<br>#f0f0f0</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-ee">
          <div class="textbox-content font-gray-33">.bg-gray-ee<br>#eeeeee</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-eb">
          <div class="textbox-content font-gray-33">.bg-gray-eb<br>#ebebeb</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-e3">
          <div class="textbox-content font-gray-33">.bg-gray-e3<br>#e3e3e3</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-d6">
          <div class="textbox-content font-gray-33">.bg-gray-d6<br>#d6d6d6</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-cc">
          <div class="textbox-content font-white">.bg-gray-cc<br>#cccccc</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-bb">
          <div class="textbox-content font-white">.bg-gray-bb<br>#bbbbbb</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-99">
          <div class="textbox-content font-white">.bg-gray-99<br>#999999</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-66">
          <div class="textbox-content font-white">.bg-gray-66<br>#666666</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-offsetright-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-gray-33">
          <div class="textbox-content font-white">.bg-gray-33<br>#333333</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue">
          <div class="textbox-content font-white">.bg-blue<br>#3598dc</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue-hoki">
          <div class="textbox-content font-white">.bg-blue-hoki<br>#67809f</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue-steel">
          <div class="textbox-content font-white">.bg-steel<br>#4b77be</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue-ocean">
          <div class="textbox-content font-white">.bg-blue-ocean<br>#0c80e8</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue-madison">
          <div class="textbox-content font-white">.bg-blue-madison<br>#578ebe</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue-chambray">
          <div class="textbox-content font-white">.bg-blue-chambray<br>#2c3e50</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-offsetright-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-blue-ebonyclay">
          <div class="textbox-content font-white">.bg-blue-ebonyclay<br>#22313f</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green">
          <div class="textbox-content font-white">.bg-green<br>#26a69a</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green-meadow">
          <div class="textbox-content font-white">.bg-green-meadow<br>#1bbc9b</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green-seagreen">
          <div class="textbox-content font-white">.bg-green-seagreen<br>#1ba39c</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green-turquoise">
          <div class="textbox-content font-white">.bg-green-turquoise<br>#36d7b7</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green-haze">
          <div class="textbox-content font-white">.bg-green-haze<br>#44b6ae</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green-jungle">
          <div class="textbox-content font-white">.bg-green-jungle<br>#26c281</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-offsetright-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-green-grass">
          <div class="textbox-content font-white">.bg-green-grass<br>#09be00</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red">
          <div class="textbox-content font-white">.bg-red<br>#cb5a5e</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red-pink">
          <div class="textbox-content font-white">.bg-red-pink<br>#e08283</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red-sunglo">
          <div class="textbox-content font-white">.bg-red-sunglo<br>#e26a6a</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red-intense">
          <div class="textbox-content font-white">.bg-red-intense<br>#e35b5a</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red-thunderbird">
          <div class="textbox-content font-white">.bg-red-thunderbird<br>#d91e18</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red-flamingo">
          <div class="textbox-content font-white">.bg-red-flamingo<br>#ef4836</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-offsetright-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-red-orange">
          <div class="textbox-content font-white">.bg-red-orange<br>#e4420a</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow">
          <div class="textbox-content font-white">.bg-yellow<br>#c49f47</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-gold">
          <div class="textbox-content font-white">.bg-yellow-gold<br>#e87e04</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-casablanca">
          <div class="textbox-content font-white">.bg-yellow-casablanca<br>#f2784b</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-crusta">
          <div class="textbox-content font-white">.bg-yellow-crusta<br>#f3c200</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-lemon">
          <div class="textbox-content font-white">.bg-yellow-lemon<br>#f7ca18</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-saffron">
          <div class="textbox-content font-white">.bg-yellow-saffron<br>#f4d03f</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-sunset">
          <div class="textbox-content font-white">.bg-yellow-sunset<br>#e89d0c</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-yellow-bronze">
          <div class="textbox-content font-white">.bg-yellow-bronze<br>#ff9000</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple">
          <div class="textbox-content font-white">.bg-purple<br>#8e5fa2</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple-plum">
          <div class="textbox-content font-white">.bg-purple-plum<br>#8775a7</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple-medium">
          <div class="textbox-content font-white">.bg-purple-medium<br>#bf55ec</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple-studio">
          <div class="textbox-content font-white">.bg-purple-studio<br>#8e44ad</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple-wisteria">
          <div class="textbox-content font-white">.bg-purple-wisteria<br>#9b59b6</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-ml-4 col-mr-8 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple-seance">
          <div class="textbox-content font-white">.bg-purple-seance<br>#9a12b3</div>
        </div>
      </div>
    </div>
    <div class="col-1of2 col-offsetright-1of2 col-ml-8 col-mr-4 col-mb-8">
      <div class="col-content">
        <div class="textbox text-center bg-purple-sunset">
          <div class="textbox-content font-white">.bg-purple-sunset<br>#6902b9</div>
        </div>
      </div>
    </div>
    <div class="footbar">
      <div class="footbar-content">
        <div class="col-1of4">
          <div class="footbar-btn touch-active sel">
            <div class="footbar-btn-icon"><i class="iconfont icon-apphome"></i></div>
            <div class="footbar-btn-text">首页</div>
          </div>
        </div>
        <div class="col-1of4">
          <div class="footbar-btn touch-active">
            <div class="footbar-btn-icon"><i class="iconfont icon-fxx"></i></div>
            <div class="footbar-btn-text">发消息</div>
          </div>
        </div>
        <div class="col-1of4">
          <div class="footbar-btn touch-active">
            <div class="footbar-btn-icon"><i class="iconfont icon-tzgg"></i></div>
            <div class="footbar-btn-text">消息</div>
          </div>
        </div>
        <div class="col-1of4">
          <div class="footbar-btn touch-active">
            <div class="footbar-btn-icon"><i class="iconfont icon-wode"></i></div>
            <div class="footbar-btn-text">我的</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footbar-space"></div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  @import './assets/css/vendor.css';
  @import './assets/css/index.css';
</style>