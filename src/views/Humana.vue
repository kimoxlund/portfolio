<template>
  <page title="Humana" type="case">
    <p class="lead">
      Component library for an internal reporting tool used by one of the
      largest health insurance providers in the U.S.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <p>
      I originally joined the Guidea team to help create a collection of
      flexible UI components in Angular as well as full page templates for the
      Humana team to easily integrate, while they were focussing on handling the
      billions of data points that would eventually populate the internal
      reporting tool.
    </p>

    <p>
      Later, I joined the Humana development team remotely to integrate the
      components in the application and help create data report pages. The
      application was built on top of an existing prototype and included lots of
      legacy libraries and CSS scattered through components that created lots of
      specificity issues with our new SCSS based workflow and an inconsistent
      UI. Being the only CSS specialist on the team, I convinced them to let me
      shift focus to refactoring the legacy CSS and rewrite components that
      weren't part of the new library. Over the course of a few months I managed
      to remove almost half of the CSS codebase.
    </p>

    <p>
      I further worked directly with project managers and designers to help
      figure out how to solve UX and design problems based on customer feedback,
      in a way that wouldn't interfere with the work of the development team.
    </p>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        agency: ["Guidea"],
        role: ["Front End Development", "UX Design"]
      }
    };
  }
};
</script>
