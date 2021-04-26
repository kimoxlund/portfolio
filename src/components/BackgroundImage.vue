<template>
  <div class="bg-image" :style="{ opacity: imageOpacity }">
    <transition
      appear
      :css="false"
      mode="out-in"
      @enter="imageEnter"
      @leave="imageLeave"
    >
      <img :src="state.bg" :key="state.bg" alt="" />
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      imageOpacity: 1,
    };
  },

  props: {
    src: String,
  },

  computed: {
    state() {
      return this.$store.state;
    },

    isScrolled() {
      return this.state.scrolled;
    },
  },

  methods: {
    imageEnter(el, done) {
      gsap.set(el, { opacity: 0 });
      gsap.to(el, {
        opacity: 0.35,
        duration: 0.4,
        delay: this.state.project ? 0.5 : 0,
        ease: "sine.out",
        onComplete: done,
      });
    },

    imageLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.4,
        delay: this.state.project ? 0.25 : 0,
        ease: "sine.in",
        onComplete: done,
      });
    },
  },

  watch: {
    isScrolled: function(value) {
      value
        ? gsap.to(this.$data, {
            imageOpacity: 0.2,
            duration: 2,
          })
        : gsap.to(this.$data, {
            imageOpacity: 1,
            duration: 2,
          });
    },
  },
};
</script>

<style lang="css" scoped>
.bg-image {
  pointer-events: none;
  user-select: none;
  width: var(--bg-width);
  max-width: var(--bg-max-width);
  height: 100%;
  position: absolute;
  top: var(--bg-top);
  right: var(--bg-right);
}

.bg-image img {
  width: 100%;
  height: auto;
  -webkit-mask-image: url(../assets/blob.png);
  mask-image: url(../assets/blob.png);
  -webkit-mask-position: center center;
  mask-position: center center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: cover;
  -webkit-mask-size: cover;
}
</style>
