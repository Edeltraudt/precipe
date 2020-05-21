import React from "react";

import { Headline } from "./../../components/core/typography";
import { Button } from "./../../components/core/forms";

import styles from "./landing.module.scss";

import { AuthForm } from "./../../components/landing";

import Image from "./../../assets/img/landing.jpg";
import ImageRetina from "./../../assets/img/landing@2x.jpg";

const LandingView = (props) => (
  <main className={styles.Landing}>
    <header className={styles.Header}>
      <Headline level="1" className={styles.Title}>
        Plan meals with friends and family and cook recipes that you{" "}
        <strong>know</strong> everyone will like.
      </Headline>

      <Button>See why this is top notch</Button>
    </header>

    <section className={styles.Auth}>
      <Headline className={styles.Headline} type="headline">
        Log in or sign up
      </Headline>
      <AuthForm />
    </section>

    <figure className={styles.Image}>
      <img src={Image} srcSet={`${ImageRetina} 2x`} alt="" />
      <figcaption className={styles.Image__caption}></figcaption>
    </figure>
  </main>
);

export default LandingView;
