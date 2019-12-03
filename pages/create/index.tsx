import React, { FC } from "react";
import Link from "next/link";
import Layout from "components/layouts/Layout";

const CreateIndex: FC<any> = () => {
  return (
    <Layout title="Create a project">
      <h3> CreateIndex</h3>
      <Link href="/create/keyboard">
        <a>create a keyboard</a>
      </Link>
      <Link href="/create/keyset">
        <a>create a keyset</a>
      </Link>
    </Layout>
  );
};

export default CreateIndex;
