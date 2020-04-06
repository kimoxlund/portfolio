<template>
  <page title="LTSA" type="case">
    <p class="lead">
      LTSA is responsible for providing reliable land title and survey systems
      to B.C. The systems are used on a daily basis by lawyers, notaries,
      government and real estate professionals.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <p>
      Together With Designstamp I have worked with LTSA since 2015, initially
      tasked with redesigning and building their corporate website and help
      portal. While making yearly updates to the design and functionality to
      meet customer needs, we have also helped them create a design system for
      their internal enterprise applications.
    </p>

    <case-image
      src="/img/work/ltsa-2.jpg"
      placeholder="/img/work/ltsa-2-pl.jpg"
      alt="Pepfar Dashboards"
    ></case-image>

    <p>
      With several different products on the go and having to rely on external
      vendors for development, it became increasingly clear that LTSA needed a
      design system to serve as the foundation for all their future products.
      Work had already begun on Web Filing, their latest initiative to bring
      their PDF based filing process online. I partnered with their UX team to
      create a visual design language and pattern library where UX designers
      could reference the library when creating wireframes and developers could
      grab component code.
    </p>

    <case-image
      src="/img/work/ltsa-1.jpg"
      placeholder="/img/work/ltsa-1-pl.jpg"
      alt="Pepfar Dashboards"
      caption="Styleguide including components, UI patterns and finished page templates"
    ></case-image>

    <p>
      This became a living style guide where we would make frequent styling
      changes to existing components and add new ones based on stakeholder
      feedback and evolving UX requirements. I set up guidelines with the
      development team that the CSS from the style guide would be the one source
      of truth and if anything was missing or needed, we would create a new
      release of the style guide instead of introducing new CSS in the
      application.
    </p>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        agency: ["Designstamp"],
        role: ["Visual Design", "Front End Development"],
        url: "https://ltsa-styleguide.designstamp.com"
      }
    };
  }
};
</script>
