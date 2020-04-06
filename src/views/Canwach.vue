<template>
  <page title="CanWaCH" type="case">
    <p class="lead">
      The Canadian Partnership for Women and Children’s Health catalyzes
      Canadian collaboration among 100 Members, including Associate Members, who
      are improving women’s and children’s health in 1000 communities worldwide.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <p>
      I joined 2paths and Designstamp to revamp CanWaCH's bilingual website to
      reflect their recent rebrand and wish to enhance member engagement, so we
      set out to build a solution where CanWaCH members could contribute
      articles and project data, be featured on the website in an engaging way,
      while still allowing CanWaCH staff to be in control of content and layout.
    </p>

    <case-image
      src="/img/work/canwach-1.jpg"
      placeholder="/img/work/canwach-1-pl.jpg"
      alt="CanWaCH homepage"
    ></case-image>

    <p>
      We chose Drupal 8 as the CMS for it's flexible REST API, role based
      content authoring workflow and ability to fully customize the admin
      interface. We further created two Angular applications. One for capturing
      project data, and one integrated in Drupal as a custom module for
      displaying the project data.
    </p>

    <p>
      This approach gave us the ability to share UI components between the CMS
      and Angular, and in turn keep all the CSS centralized and maintainable as
      the CMS and applications would grow over time and new features would be
      added. Focused, all the while, on maintaining a seamless experience for
      members when creating content in Drupal and submitting project data.
    </p>

    <p>
      Since Drupal follows the SMACSS guidelines for CSS architecture, we
      decided to follow this paradigm across all the custom code to keep it
      consistent. A set of CSS utility classes were added to give content
      editors flexible styling capabilities while still keeping the code
      organized.
    </p>

    <case-image
      src="/img/work/canwach-2.jpg"
      placeholder="/img/work/canwach-2-pl.jpg"
      alt="CanWaCH member profiles"
      caption="Each CanWaCH member would have their own themeable profile page showcasing their projects and contributed content"
    ></case-image>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        agency: ["2paths", "Designstamp"],
        role: ["Visual Design", "UX", "Front End Development"],
        url: "https://canwach.ca"
      }
    };
  }
};
</script>
