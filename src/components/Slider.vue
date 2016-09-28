<template>
<div class="slider"
  @touchmove="swipeMove"
  @touchstart="swipeStart"
  @touchend="swipeEnd"
  @mousedown="swipeStart"
  @mouseup="swipeEnd"
  @mousemove="swipeMove">
  <slot></slot>
</div>
</template>

<script>
export default {
  data() {
    return {
      tracking: true,
      start: {},
      end: {},
      thresholdTime: 500,
      thresholdDistance: 100,
    };
  },

  methods: {
    swipeStart(e) {
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.tracking = false;
          return;
        }

        this.tracking = true;
        /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
        this.start.t = new Date().getTime();
        this.start.x = e.targetTouches[0].clientX;
        this.start.y = e.targetTouches[0].clientY;
      } else {
        this.tracking = true;
        /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
        this.start.t = new Date().getTime();
        this.start.x = e.clientX;
        this.start.y = e.clientY;
      }
    },

    swipeMove(e) {
      if (this.tracking) {
        if (e.type === 'touchmove') {
          e.preventDefault();
          this.end.x = e.targetTouches[0].clientX;
          this.end.y = e.targetTouches[0].clientY;
        } else {
          e.preventDefault();
          this.end.x = e.clientX;
          this.end.y = e.clientY;
        }
      }
    },

    swipeEnd() {
      this.tracking = false;
      const now = new Date().getTime();
      const deltaTime = now - this.start.t;
      const deltaX = this.end.x - this.start.x;
      const deltaY = this.end.y - this.start.y;
      /* work out what the movement was */
      if (deltaTime > this.thresholdTime) {
        /* gesture too slow */
        return;
      }

      if ((deltaX > this.thresholdDistance) &&
        (Math.abs(deltaY) < this.thresholdDistance)) {
        // swipe right
        this.$emit('pre');
      } else if ((-deltaX > this.thresholdDistance) &&
        (Math.abs(deltaY) < this.thresholdDistance)) {
        // swipe left
        this.$emit('next');
      }
    },
  },
};
</script>

<style>
.slider {
  position: relative;
  height: 120px;
  top: 0;
  left: 0;
  color: #fff;
  overflow: hidden;
}
.slider-item {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: 0.4s ease-in-out transform, opacity;
  -webkit-transition: 0.4s ease-in-out transform, opacity;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: ease-in-out;
}
</style>