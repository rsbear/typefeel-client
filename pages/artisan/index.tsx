import React, { FC } from "react";
import Layout from "components/layouts/Layout";

const Artisans: FC<any> = ({ authUser }) => {
  return (
    <Layout title="Artisans" authUser={authUser}>
      <h3> Artisans</h3>
    </Layout>
  );
};

export default Artisans;
