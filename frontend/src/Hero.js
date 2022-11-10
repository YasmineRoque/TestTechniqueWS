import React from "react";
import { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      {/* <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Primary hero</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section> */}
      <section class="hero is-medium has-bg-img">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">La liste définitive des Argonautes</h1>
            <h2 class="subtitle has-text-success-light">
              Grèce antique "515 avant JC"
            </h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Hero;
