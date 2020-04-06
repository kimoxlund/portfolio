<template>
  <a
    class="page-link"
    :href="url"
    :target="target"
    :rel="rel"
    :style="zigZag"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    {{ text }}
  </a>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      hover: false,
      zigZagTop: 0,
      zigZagBottom: 100
    };
  },

  props: {
    text: String,
    url: String,
    target: String,
    rel: String
  },

  computed: {
    zigZag() {
      return {
        backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='0,${this.zigZagTop} 100,${this.zigZagBottom} 200,${this.zigZagTop}' fill='none' stroke='hsl(229, 100%, 67%)' stroke-width='15' /%3E%3C/svg%3E")`
      };
    }
  },

  watch: {
    hover: function(value) {
      value
        ? gsap.to(this.$data, {
            zigZagTop: 10,
            zigZagBottom: 10,
            duration: 0.3
          })
        : gsap.to(this.$data, {
            zigZagTop: 0,
            zigZagBottom: 100,
            duration: 0.3
          });
    }
  }
};
</script>

<style lang="css">
.page-link {
  display: inline-block;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
  color: var(--blue-1);
  text-decoration: none;
  background-position-y: 100%;
  background-repeat: repeat-x;
  background-size: 16px;
}

.page-link:hover {
  color: var(--blue-2);
}
</style>
