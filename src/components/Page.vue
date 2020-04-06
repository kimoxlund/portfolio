<template>
  <div class="ui-content" ref="scrollContainer">
    <intersect @enter="onEnter" @leave="onLeave"><div></div></intersect>
    <div class="page-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="page" :class="[project ? 'page' : 'page page--narrow']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Intersect from "vue-intersect";

export default {
  components: { Intersect },

  props: {
    title: String
  },

  created() {
    this.$store.commit("setPage", this.$route.meta);
  },

  destroyed() {
    this.$store.commit("setPage", this.$route.meta);
  },

  mounted() {
    this.$refs.scrollContainer.scrollTop = 0;
  },

  computed: {
    project() {
      return this.$store.state.project;
    }
  },

  methods: {
    onEnter() {
      this.$store.commit("setScroll", false);
    },

    onLeave() {
      this.$store.commit("setScroll", true);
    }
  }
};
</script>

<style lang="css">
.ui-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding-top: var(--page-top);
  padding-left: var(--page-left);
  padding-right: var(--page-right);
  padding-bottom: 3rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: auto;
}

.ui-content--narrow {
  width: var(--page-width-narrow);
}

.page-title {
  max-width: var(--page-header-width);
}

.page {
  max-width: var(--page-width);
  margin-left: var(--page-indentation);
}

.page--narrow {
  max-width: var(--page-width-narrow);
}
</style>
