<template>
  <nav role="navigation">
    <ol class="nav-list" ref="nav">
      <nav-link
        :to="item.to"
        :title="item.title"
        v-for="(item, i) in navigation"
        :key="i"
        @onAnimation="setPointPosition"
        @mouseenter.native="$emit('onHover', i)"
        @click.native="$emit('onClick', i)"
      >
        <nav-point
          :mousePosition="mousePosition"
          :position="item.position"
          ref="point"
          @onInit="setPointPosition"
        ></nav-point>
      </nav-link>
    </ol>
    <svg class="nav-path">
      <polyline class="nav-polyline" :points="polyline" />
    </svg>
  </nav>
</template>

<script>
import NavLink from "./NavLink";
import NavPoint from "./NavPoint";

export default {
  components: {
    "nav-link": NavLink,
    "nav-point": NavPoint,
  },

  data() {
    return {
      navigation: [
        {
          to: "/",
          title: "Home",
          position: { x: 0, y: 0 },
        },
        // {
        //   to: "/humana",
        //   title: "Humana",
        //   position: { x: 0, y: 0 }
        // },
        {
          to: "/thinkific",
          title: "Thinkific",
          position: { x: 0, y: 0 },
        },
        {
          to: "/ltsa",
          title: "LTSA",
          position: { x: 0, y: 0 },
        },
        {
          to: "/recbc",
          title: "RECBC",
          position: { x: 0, y: 0 },
        },
        // {
        //   to: "/athena-pathways",
        //   title: "Athena Pathways",
        //   position: { x: 0, y: 0 },
        // },
        {
          to: "/whiteleaf-interior",
          title: "Whiteleaf Interior",
          position: { x: 0, y: 0 },
        },
        {
          to: "/pepfar",
          title: "PEPFAR",
          position: { x: 0, y: 0 },
        },
        {
          to: "/canwach",
          title: "CanWaCH",
          position: { x: 0, y: 0 },
        },
        // {
        //   to: "/unicorn-app",
        //   title: "Unicorn App",
        //   position: { x: 0, y: 0 },
        // },
      ],
      mousePosition: { x: 0, y: 0 },
      scrollPosition: {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop,
      },
    };
  },

  mounted() {
    window.addEventListener("mousemove", this.setMousePosition);

    const ro = new ResizeObserver(() => {
      this.setPointPosition();
    });

    ro.observe(this.$refs.nav);
  },

  computed: {
    coordinates() {
      return this.navigation
        .map(value => Object.values(value.position))
        .reduce((p, n) => p.concat(n), []);
    },

    polyline() {
      return this.coordinates.join(" ");
    },
  },

  methods: {
    setMousePosition() {
      this.mousePosition.x = event.clientX;
      this.mousePosition.y = event.clientY;
    },

    setPointPosition() {
      this.$refs.point.forEach((point, i) => {
        let rect = point.$el.getBoundingClientRect();

        this.navigation[i].position = {
          x: rect.left + rect.width / 2 + this.scrollPosition.left,
          y: rect.top + rect.height / 2 + this.scrollPosition.top,
        };
      });
    },
  },
};
</script>

<style>
nav {
  position: relative;
  z-index: 10;
}

.nav-list {
  width: var(--nav-width);
  height: 80vh;
  position: absolute;
  top: 10vh;
  right: var(--nav-right);
  z-index: 10;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.nav-item {
  display: inherit;
  position: relative;
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

.nav-point {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #5574ff;
  position: relative;
  z-index: 10;
  border-radius: 4px;
}

@keyframes shadow {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(8);
  }
  100% {
    opacity: 0;
    transform: scale(8);
  }
}

.nav-path {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

.nav-polyline {
  fill: none;
  stroke-width: 1px;
  stroke: hsl(229, 50%, 46%);
}
</style>
