import React, { FC } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Title } from "../../components/Title/Title";
import styles from "./Blog.module.scss";

import blog from "./assets/blog_header.svg";

export const Blog: FC = () => {
  const renderProps = (title: string, description: string) => {
    return (
      <>
        <Title size="highFontSize" text={title} />
        <span>{description}</span>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <HeroSection
        title="Блог"
        description="Статьи, которые я написал"
        render={renderProps}
        url={blog}
        size="medium"
        position="nocenter"
        imgDescription="blog"
      />
      <section className={styles.blog}>
        <article></article>
      </section>
    </div>
  );
};
