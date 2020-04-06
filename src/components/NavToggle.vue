<template>
  <button
    class="nav-toggle"
    @click="$emit('onClick')"
    @hover="navToggled = !navToggled"
  >
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <polyline class="nav-toggle-polyline" :points="zigZag1" />
      <polyline class="nav-toggle-polyline" :points="zigZag2" />
    </svg>
    <div class="nav-toggle-text">Menu</div>
  </button>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      zigZag1Top: 100,
      zigZag1Bottom: 100,
      zigZag2Top: 200,
      zigZag2Bottom: 200
    };
  },

  props: {
    navToggled: Boolean
  },

  computed: {
    zigZag1() {
      return `0,${this.zigZag1Top} 100,${this.zigZag1Bottom} 200,${this.zigZag1Top} 300,${this.zigZag1Bottom}`;
    },
    zigZag2() {
      return `0,${this.zigZag2Top} 100,${this.zigZag2Bottom} 200,${this.zigZag2Top} 300,${this.zigZag2Bottom}`;
    }
  },

  watch: {
    navToggled: function(value) {
      value
        ? gsap.to(this.$data, {
            zigZag1Top: 50,
            zigZag1Bottom: 150,
            zigZag2Top: 150,
            zigZag2Bottom: 250,
            duration: 0.3
          })
        : gsap.to(this.$data, {
            zigZag1Top: 100,
            zigZag1Bottom: 100,
            zigZag2Top: 200,
            zigZag2Bottom: 200,
            duration: 0.3
          });
    }
  }
};
</script>

<style lang="css">
.nav-toggle {
  width: 4rem;
  height: 4rem;
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 300;
  background-color: transparent;
  border: none;
}

.nav-toggle:hover {
  cursor: pointer;
}

.nav-toggle-text {
  font-size: 0;
  height: 0;
}

.nav-toggle-polyline {
  fill: none;
  stroke-width: 10px;
  stroke: var(--blue-3);
}

@media only screen and (min-width: 800px) {
  .nav-toggle {
    display: none;
  }
}
</style>
