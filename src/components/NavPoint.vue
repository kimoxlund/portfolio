<template>
  <span class="nav-point" :style="shadow"></span>
</template>

<script>
export default {
  data() {
    return {
      proximityMax: 1,
      proximityThreshold: 300,
      opacity: 0
    };
  },

  props: {
    to: String,
    mousePosition: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    }
  },

  mounted() {
    this.$emit("onInit", this);
  },

  computed: {
    closestPoint() {
      return { x: this.position.x, y: this.position.y };
    },

    distance() {
      return Math.sqrt(
        (this.mousePosition.x - this.position.x) *
          (this.mousePosition.x - this.position.x) +
          (this.mousePosition.y - this.position.y) *
            (this.mousePosition.y - this.position.y)
      );
    },

    proximity() {
      let m = (0 - this.proximityMax) / (this.proximityThreshold - 0);
      let b = this.proximityMax - m * 0;
      let value = m * this.distance + b;

      return value <= 0 ? 0 : value;
    },

    shadow() {
      return {
        boxShadow:
          "0 0 80px " +
          Math.floor(this.proximity * 40) +
          "px hsla(" +
          Math.floor(Math.random() * (180 - 150 + 1) + 220) +
          ",100%,50%,1), 0 0 20px " +
          Math.floor(this.proximity * 5) +
          "px hsla(240,100%,100%,1)",
        transform: "scale(" + Math.max(1, this.proximity * 2) + ")"
      };
    }
  }
};
</script>

<style>
.nav-point {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #5574ff;
  position: relative;
  z-index: 10;
  border-radius: 4px;
}
</style>
