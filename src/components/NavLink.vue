<template>
  <li class="nav-item" :style="random">
    <router-link class="nav-link" :to="to">
      <slot></slot>
      <span class="nav-title" :style="{ opacity: opacity }">{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      opacity: 1,
      left: 0,
    };
  },

  props: {
    to: String,
    title: String,
  },

  mounted() {
    this.$emit("onInit", this);
  },

  computed: {
    isProject() {
      return this.$route.meta.project;
    },

    random() {
      return {
        left: `${this.left}%`,
      };
    },
  },

  watch: {
    isProject: function(value) {
      value
        ? gsap.to(this.$data, {
            opacity: 0.5,
            duration: Math.random() * 1,
          })
        : gsap.to(this.$data, {
            opacity: 1,
            duration: Math.random() * 1,
          });
      value
        ? gsap.to(this.$data, {
            left: Math.floor(Math.random() * (60 - 50 + 1) + 40),
            duration: Math.random() * (1.5 - 0.5 + 1) + 0.5,
            onUpdate: () => {
              this.$emit("onAnimation", this);
            },
          })
        : gsap.to(this.$data, {
            left: Math.floor(Math.random() * 40 + 20),
            duration: Math.random() * (1.5 - 0.5 + 1) + 0.5,
            onUpdate: () => {
              this.$emit("onAnimation", this);
            },
          });
    },
  },
};
</script>

<style>
.nav-link {
  position: relative;
  z-index: 200;
  padding: 1rem;
  text-decoration: none;
  pointer-events: all;
}

.router-link-exact-active .nav-point:before {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  z-index: -1;
  background-color: #5574ff;
  border-radius: 4px;
  animation: shadow 1s infinite forwards;
}

.router-link-exact-active .nav-title {
  opacity: 1 !important;
}

.nav-title {
  position: relative;
  z-index: 20;
  margin-left: 1rem;
  font-size: 0.825rem;
  letter-spacing: 3px;
  color: var(--blue-1);
  text-decoration: none;
  white-space: nowrap;
}

@keyframes shadow {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(7);
  }
  100% {
    opacity: 0;
    transform: scale(7);
  }
}
</style>
