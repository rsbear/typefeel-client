import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import withUrqlClient from "lib/withUrqlClient";

const Artisans: FC<any> = () => (
  <Layout>
    <h2>Artisans page</h2>
  </Layout>
);

export default withUrqlClient(Artisans);
