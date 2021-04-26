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
    caption: String,
  },
};
</script>

<style lang="css" scoped>
figure {
  margin: var(--page-image-spacing) var(--page-image-indentation);
}

figcaption {
  position: relative;
  margin: var(--page-image-caption-margin-y) var(--page-image-caption-margin-x);
  flex: 0 0 12rem;
  font-size: 0.925rem;
  color: var(--text-white);
  padding: var(--page-image-caption-padding-y)
    var(--page-image-caption-padding-x);
}

figcaption:after {
  content: "";
  width: 1.5rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-left: 1px solid var(--blue-3);
  border-top: 1px solid var(--blue-3);
  border-bottom: 1px solid var(--blue-3);
}

.v-lazy-image {
  opacity: 0.5;
  transition: opacity 1s;
}

.v-lazy-image-loaded {
  opacity: 1;
}
</style>
