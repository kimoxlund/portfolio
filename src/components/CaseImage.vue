<template>
  <figure>
    <v-lazy-image :src="src" :src-placeholder="placeholder" :alt="alt" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    placeholder: String,
    alt: String,
    caption: String
  }
};
</script>

<style lang="css" scoped>
figure {
  margin: var(--page-image-spacing) var(--page-image-indentation);
  /* background-color: var(--blue-5);
  padding: 2rem; */
}

figcaption {
  margin-left: var(--page-spacing);
  flex: 0 0 12rem;
  font-size: 0.875rem;
  color: var(--text-white);
}

.v-lazy-image {
  opacity: 0.5;
  transition: opacity 1s;
}

.v-lazy-image-loaded {
  opacity: 1;
}
</style>
