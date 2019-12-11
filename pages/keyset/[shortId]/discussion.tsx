import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import { useKeysetQuery } from "generated/graphql";
import { GetProps } from "interfaces/GetProps";

const KeysetDiscussion: GetProps<any> = ({ authUser, shortId }) => {
  const { loading, error, data } = useKeysetQuery({ variables: { shortId } });
  const dynamicNav = {
    name: !loading ? data.keyset.profile + " " + data.keyset.name : "",
    shortId: shortId,
    productType: "keyset"
  };
  return (
    <Layout title="Discuss" authUser={authUser} dynamicNav={dynamicNav}>
      <h3> KeysetDiscussion</h3>
    </Layout>
  );
};

KeysetDiscussion.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default KeysetDiscussion;
