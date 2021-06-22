import styles from "./RowB.module.css";

import MovieCardSmall from "../../MovieCardSmall/MovieCardSmall";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRef } from "react";
const RowB = () => {
  const movieContainerRef = useRef(null);

  const scrollRight = () => {
    movieContainerRef.current.scrollBy({
      top: 0,
      left: -100,
      behavior: "smooth",
    });
  };
  const scrollLeft = () => {
    movieContainerRef.current.scrollBy({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.row__b__rows}>
      <h1>Suggestions</h1>
      <div className={styles.row__b__rows__movies} ref={movieContainerRef}>
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
      </div>
      <div className={styles.row__b__rows__nav__left}>
        <BsChevronLeft
          className={styles.row__b__rows__nav__btn__right}
          onClick={scrollRight}
        />
      </div>
      <div className={styles.row__b__rows__nav__right}>
        <BsChevronRight
          className={styles.row__b__rows__nav__btn__right}
          onClick={scrollLeft}
        />
      </div>
    </div>
  );
};

export default RowB;
