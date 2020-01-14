import React, { FC } from "react";
import Header from "components/layouts/Header";
import Navigation from "./Navigation";
import { flex, margins } from "styles/main";
import css from "@emotion/css";
import Footer from "./Footer";

const Layout: FC<any> = ({ title, children, authUser, dynamicNav }) => (
  <div css={[flex.row, margins("0 auto")]}>
    <Header title={title} />
    <Navigation authUser={authUser} dynamicNav={dynamicNav} />
    <main css={mainContent}>
      <>{children}</>
      <Footer />
    </main>
  </div>
);

export default Layout;

const mainContent = css`
  position: relative;
  padding-top: 50px;
  width: 900px;
`;
