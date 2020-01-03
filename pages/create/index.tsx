import React, { FC } from "react";
import Link from "next/link";
import Layout from "components/layouts/Layout";
import { AuthUser } from "interfaces/AuthUser";

interface Props {
  authUser: AuthUser;
}

const CreateIndex: FC<Props> = ({ authUser }) => {
  return (
    <Layout title="Create a project" authUser={authUser}>
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
