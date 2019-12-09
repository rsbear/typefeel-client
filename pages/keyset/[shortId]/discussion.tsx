import React, { FC } from "react";
import Layout from "components/layouts/Layout";

const KeysetDiscussion: FC<any> = ({ authUser }) => {
  return (
    <Layout title="Discuss" authUser={authUser}>
      <h3> KeysetDiscussion</h3>
    </Layout>
  );
};

export default KeysetDiscussion;
