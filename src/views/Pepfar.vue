<template>
  <page title="President's Emergency Fund For AIDS Relief" type="case">
    <p class="lead">
      The President’s Emergency Plan For Aids Relief (PEPFAR) is the largest
      global health initiative focused on a single disease ever undertaken, and
      the United States is the single largest donor to global HIV/AIDS efforts
      in the world.
    </p>
    <p>
      I joined 2paths and Designstamp for two years working on visual design and
      front end development for the PEPFAR dashboards. An ongoing initiative to
      bring HIV/AIDS related aide data online and provide increased data
      transparency.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <case-image
      src="/img/work/pepfar-1.jpg"
      placeholder="/img/work/pepfar-1-pl.jpg"
      alt="Pepfar Dashboards"
      caption="Rich views including interactive charts help guide viewers and provide them in-depth access to the data."
    ></case-image>

    <case-image
      src="/img/work/pepfar-2.png"
      placeholder="/img/work/pepfar-2-pl.png"
      alt="Pepfar Dashboards mobile screens"
      caption="The detailed visualizations and complex filters were designed to be accessible on all screen sizes."
    ></case-image>

    <case-image
      src="/img/work/pepfar-3.jpg"
      placeholder="/img/work/pepfar-3-pl.jpg"
      alt="Pepfar Dashboards mobile screens"
      caption="The dashboards provide comparison views to help the viewer compare data across countries"
    ></case-image>

    <h2>Technical Details</h2>
    <p>
      With frequent change in stakeholders who each had their own vision for the
      dashboards, it was important that the UI components were flexible and easy
      to rearrange so the interface could rapidly be modified.
    </p>

    <p>
      The application was written in AngularJS and was not using a fully
      component-based structure. I used a combination of SMACSS and BEM
      methodologies for the SCSS based workflow to help the other developers on
      the team clearly distinguish between layout and component HTML in
      situations where I was not able to work on the page templates.
    </p>
    <p>
      One of the key challenges was making sure the application followed the
      Section 508 accessibility requirements for U.S. federal agencies. This
      included making sure the Angular application would work with screen
      readers, keyboard navigation, and that all the data visualizations could
      be read and understood by people with visual impairments. I designed
      distinct groupings of colour palettes that, together with clear UI states,
      would ensure that everyone could use the tool.
    </p>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        agency: ["2paths", "Designstamp"],
        role: ["Visual Design", "Front End Development"],
        tech: ["Angular", "MongoDB", "D3"],
      },
    };
  },
};
</script>
