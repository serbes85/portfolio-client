import React, { FC, useRef, createRef, useEffect, useState } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Title } from "../../components/Title/Title";
import { TriangleLeft } from "../../components/TriangleLeft/TriangleLeft";
import { TriangleRight } from "../../components/TriangleRight/TriangleRight";
import { SideBar } from "../../components/SideBar/SideBar";
import { BlogContent } from "../../components/BlogContent/BlogContent";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Blog.module.scss";

import { articles } from "./constants";
//img__header
import blog from "./assets/header/blog.svg";

export const Blog: FC = () => {
  const section = useRef<null | HTMLElement>(null);
  const refsArticles = useRef(
    Array(articles.length)
      .fill(null)
      .map(() => createRef())
  );
  const [activeArticleId, setActiveArticleId] = useState("0");
  const observerOptions = {
    rootMargin: "0px -50px -55% 0px",
  };

  const renderProps = (title: string, description: string) => {
    return (
      <>
        <div className={styles.blogTitle}>
          <Title size="high" textTop={title} />
        </div>
        <span>{description}</span>
      </>
    );
  };
  const scrollToSection = () => {
    section.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const observerCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const id = String(entry.target.id);

        setActiveArticleId(id);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    refsArticles.current.forEach((refArticle: any) =>
      observer.observe(refArticle.current)
    );

    return () => observer.disconnect();
  }, [observerOptions, activeArticleId]);

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Блог"
          description="Статьи, которые я написал"
          render={renderProps}
          backgroundUrl={blog}
          backgroundTitle="blog"
          size="medium"
          scrollToSection={scrollToSection}
        />
        <section className={styles.blog} ref={section}>
          <div className={styles.triangles}>
            <TriangleLeft
              name="triangle"
              fill="#faf8f0"
              width="100%"
              height="120px"
            />
            <TriangleRight
              name="triangle"
              fill="#faf8f0"
              width="100%"
              height="120px"
            />
          </div>
          <div className={styles.content}>
            <aside className={styles.sidebar}>
              <SideBar
                contentList={articles}
                refsArticles={refsArticles}
                activeArticleId={activeArticleId}
              />
            </aside>
            <div className={styles.articles}>
              <BlogContent refsArticles={refsArticles} articles={articles} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
