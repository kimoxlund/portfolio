<template>
  <page title="Whiteleaf Interior Painting" type="case">
    <p class="lead">
      Minimalistic site built to showcase the beatiful work of newly launched
      local interior painting company.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <case-image
      src="/img/work/whiteleaf-1.jpg"
      placeholder="/img/work/whiteleaf-1-pl.jpg"
      alt="Pepfar Dashboards"
      caption="The main goal was to make the UI as invisible as possible to focus on Whiteleaf's work. Subtle design accents give a sense of it being high-end while approachable at the same time."
    ></case-image>

    <case-image
      src="/img/work/whiteleaf-2.jpg"
      placeholder="/img/work/whiteleaf-1-pl.jpg"
      alt="Pepfar Dashboards"
      caption="Images can be positioned anywhere on a 12 column grid to facilitate a wide range of crops and sizes."
    ></case-image>

    <case-image
      src="/img/work/whiteleaf-3.jpg"
      placeholder="/img/work/whiteleaf-1-pl.jpg"
      alt="Pepfar Dashboards"
      caption="The viewer can drag the image comparison slider to get a sense of what a custom mural will look like before and after."
    ></case-image>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        role: ["Visual Design", "Front End Development"],
        tech: ["Statamic"],
        url: "https://whiteleafpainting.ca/",
      },
    };
  },
};
</script>
