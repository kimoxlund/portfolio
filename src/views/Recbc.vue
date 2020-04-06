<template>
  <page title="Real Estate Council of BC" type="case">
    <p class="lead">
      Building an app to educate consumers about the licensee/client
      relationship in real estate transactions and efficiently fill out
      mandatory compliance forms.
    </p>

    <case-meta :meta="caseMeta"></case-meta>

    <p>
      I partnered with Designstamp to build and design an app that would easily
      allow licensees to comply with new consumer protection rules and provide a
      secure way for licensees and consumers to review and sign mandatory
      disclosure forms together.
    </p>

    <p>
      The app was designed with a step-by-step approach assisting both the
      consumer and licensee in a friendly way using subtle SVG animations and
      helpful tips as they progressed through the forms.
    </p>

    <case-image
      src="/img/work/recbc-2.png"
      placeholder="/img/work/recbc-2-pl.png"
      alt="Real Estate Council of BC forms app"
    ></case-image>

    <p>
      The app was built with Vue as a progressive web app that the licensees
      could install on their home screen. To make sure licensees could do this
      easily, I built in device/browser detection that would serve up a handy
      guide on how to add the app to their home screen depending on the device.
    </p>

    <p>
      Since consumer privacy protection was imperative, I used IndexedDB to
      store the data in the browser. The data was saved at every step of the way
      in case the app was accidentally closed and stored for 72 hours to make
      sure the forms could still be sent via email if there were signal or wifi
      issues.
    </p>

    <case-image
      src="/img/work/recbc-1.jpg"
      placeholder="/img/work/recbc-1-pl.jpg"
      alt="Signing a finished form"
      caption="Consumers can sign the forms and receive a copy of the form without having to share their personal information with the licensee."
    ></case-image>
  </page>
</template>

<script>
export default {
  data() {
    return {
      caseMeta: {
        agency: ["Designstamp"],
        role: ["Visual Design", "Development"],
        url: "https://formsapp-recbc.ca"
      }
    };
  }
};
</script>
