import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import { Loader } from "../Loader";
import styled from "styled-components";

const CustomLink = styled(NavLink)`
  &.active {
    color: rgb(255, 81, 0);
  }
`;

export const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <CustomLink className={styles.link} to="/" end>
          Home
        </CustomLink>
        <CustomLink className={styles.link} to="/movies">
          Movies
        </CustomLink>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
