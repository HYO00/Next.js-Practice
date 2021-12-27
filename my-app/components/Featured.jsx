import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/hearo1.jpg",
    "/img/hearo2.jpg",
    "/img/hearo3.jpg",
    "/img/hearo4.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "1") {
      setIndex(index !== 0 ? index - 1 : 3);
    }
    if (direction === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("1")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, idx) => (
          <div className={styles.imgContainer} key={idx}>
            <Image src={img} alt="" layout="fill" />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    </div>
  );
};

export default Featured;
