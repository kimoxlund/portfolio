<template>
  <page title="Thinkific - Your First Course" type="case">
    <p class="lead">
      Thinkific provides a platform to create and sell online courses. Over the years they have crafted a lot of content to help creators succeed, but the content is spread across several different platforms and is often hard to navigate.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <p>
      I was initially hired to create wireframes for a concept called Project Explorer with the goal of having all Thinkific's help content available in one central location. Working from a high level outline of the sitemap, I came up with a choose your own adventure type concept visualized in the
      form of a subway map travelling across several islands. Each representing a topic in the creator journey.
    </p>

    <case-image src="/img/work/thinkific-wireframe.jpg" placeholder="/img/work/thinkific-wireframe-pl.png" alt="Thinkific Explorer wireframe" caption="The initial wireframe is using the concept of a subway map to group and navigate the different parts of learning the platform."></case-image>

    <p>
      After a bit of internal circulation, it was decided that we would create an MVP focussing only on the early stage of becoming a successful creator: Launching the first course. The subway map concept was too big and complex for a prototype, so as the first step I designed and built a more
      visually traditional site so we could test if the structure and content was helpful for creators.
    </p>

    <p>
      The initial prototype got lots of positive feedback from creators and stakeholders, so the next phase was greenlit. While I worked on designing and making the map concept come to life, the content team would be focussing on creating additional video content to fully make the site feel alive
      and engaging.
    </p>

    <p>If the new concept becomes a success, the next step will be to add additional phases to the project and eventually cover the whole creator journey.</p>

    <case-image src="/img/work/thinkific-1.jpg" placeholder="/img/work/thinkific-1-pl.png" alt="Thinkific your first course home screen view" caption="The homepage is designed like a map with 3 islands visually referencing the 3 phases of launcing a course — plan, create, and launch."></case-image>

    <case-image
      src="/img/work/thinkific-2.jpg"
      placeholder="/img/work/thinkific-2-pl.jpg"
      alt="Your first course task page view"
      caption="Bigger task pages are broken down into small steps with each step highlighted on the path. The markers can contain images and icons to help grab attention. Each step also has additional resources linking to various help articles, videos and documents."
    ></case-image>

    <case-image src="/img/work/thinkific-3.jpg" placeholder="/img/work/thinkific-3-pl.jpg" alt="Scrollytelling used on the create a sales page page" caption="Scrollytelling is used to show how to build a sales page. The different parts of the page are being built as you scroll."></case-image>

    <case-image src="/img/work/thinkific-4.jpg" placeholder="/img/work/thinkific-4-pl.jpg" alt="Small visual design cues" caption="Subtle visual cues gives a quick overview of how far you've made it in the journey to launching your first course."></case-image>

    <h2>The build</h2>
    <p>
      We knew from the beginning that, if successful, the project would evolve from a simpler informational site to a more interactive experience with an API based content model and JavaScript based frontend. The CMS Statamic would give us the option to very quickly build an MVP using its internal
      templating system, but also give us GraphQL and Rest APIs once the project was greenlit for phase two.
    </p>

    <p>Phase two is built on Vue with a GraphQL API serving the content from the CMS. Animations and illustrations are all done using SVG and GSAP.</p>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        role: ["UX", "Visual Design", "Front End Development"],
        tech: ["Vue", "Statamic", "GraphQL", "GSAP"],
        url: "https://yourfirstcourse.thinkific.com",
      },
    };
  },
};
</script>
