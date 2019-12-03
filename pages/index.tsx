import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";

const Landing: GetProps<any> = ({ authUser }) => {
  return (
    <Layout title="Home" authUser={authUser}>
      <h2>landing page</h2>
      {/* {test.data.Keyboard.map((a: any) => (
        <div key={a.id}>
          <h2>{a.size}</h2>
          <h2>{a.name}</h2>
        </div>
      ))} */}
    </Layout>
  );
};

export default Landing;
