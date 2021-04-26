<template>
  <div class="case-meta">
    <dl v-if="meta.agency">
      <dt>Agency</dt>
      <dd v-for="(agency, i) in meta.agency" :key="i">{{ agency }}</dd>
    </dl>

    <dl v-if="meta.role">
      <dt>My Role</dt>
      <dd v-for="(role, i) in meta.role" :key="i">{{ role }}</dd>
    </dl>

    <dl v-if="meta.tech">
      <dt>Tech</dt>
      <dd v-for="(tech, i) in meta.tech" :key="i">{{ tech }}</dd>
    </dl>

    <div class="case-link" v-if="meta.url">
      <page-link
        text="Launch Project"
        :url="meta.url"
        target="_blank"
        rel="nofollow noopener"
      >
      </page-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meta: Object,
  },
};
</script>

<style lang="css">
.case-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 3.5rem 0;
  padding: 1.25rem 0 1.5rem 0;
  border-top: 1px solid var(--blue-3);
  border-bottom: 1px solid var(--blue-3);
}

.case-link {
  flex: 0 1 100%;
}

dl {
  margin: 0.5rem 0;
  flex: 0 1 auto;
  font-size: 0.875rem;
}

dt {
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--blue-2);
}

dd {
  margin: 0;
  letter-spacing: 0.5px;
}

@media only screen and (min-width: 500px) {
  .case-link {
    flex: 1 0 auto;
    text-align: right;
  }

  dl {
    flex: 1 0 auto;
  }
}
</style>
