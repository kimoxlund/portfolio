<template>
  <page title="Athena Pathways" type="case">
    <p class="lead">
      Athena Pathways was launched with the goal of helping women find careers
      in AI and data science by partnering with several academic institutions in
      BC offering courses and workshops in artificial intelligence as well as
      scholarships.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <case-image
      src="/img/work/athena-1.jpg"
      placeholder="/img/work/athena-1-pl.png"
      alt="Athena Pathways home screen"
      caption="The homepage serves as a quick introduction to the program and provides call to actions to the 3 main pathways the viewer can take."
    ></case-image>

    <case-image
      src="/img/work/athena-2.png"
      placeholder="/img/work/athena-2-pl.png"
      alt="Athena Pathways job application"
      caption="The job board pre-fills most information from the applications profile and provides subtle hints to complete their profile"
    ></case-image>

    <case-image
      src="/img/work/athena-3.png"
      placeholder="/img/work/athena-3-pl.png"
      alt="Athena Pathways dashboard"
      caption="Partners can keep track of their posted jobs as well as received applications. They can easily add notes to applications as well as circulate them as PDF files."
    ></case-image>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        role: ["Visual Design", "Front End Development", "Drupal Development"],
        tech: ["Drupal"],
        url: "https://athenapathways.org/",
      },
    };
  },
};
</script>
