import React from "react";
import { TriangleRightProps } from "./interfaces";
import sprite from "./image/triangle.svg";
import styles from "./TriangleRight.module.scss";

export const TriangleRight: React.FC<TriangleRightProps> = ({
  name,
  fill,
  width,
  height,
  className,
}) => {
  return (
    <div className={styles.right}>
      <svg fill={fill} width={width} height={height} className={`${className}`}>
        <use xlinkHref={`${sprite}#bg-${name}`} />
      </svg>
    </div>
  );
};
