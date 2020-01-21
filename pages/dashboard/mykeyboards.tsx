import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import AccountPageNavigation from "components/shared/AccountPageNavigation";
import { useUserDashboardQuery, Keyboard } from "generated/graphql";

import css from "@emotion/css";
import { text } from "styles/text";
import { useRouter } from "next/router";
import Link from "next/link";
import useCheckAuth from "hooks/useCheckAuth";
import KeyboardProjectTile from "components/KeyboardProjectTile";

const Dashboard: FC<any> = ({ authUser }) => {
  useCheckAuth(authUser);
  const router = useRouter();
  const { loading, error, data } = useUserDashboardQuery();

  return (
    <Layout title="Dashboard - My Keyboards" authUser={authUser}>
      {loading && <h1>Loading...</h1>}
      {error && <h2>Oops, something went wrong.</h2>}
      {!loading && data && data.me && (
        <div>
          <AccountPageNavigation username={data.me.username} router={router} />
          <h3>My keyboards in interest check</h3>
          {data.me.keyboards.map(
            (k: any) =>
              k.interestCheck && <KeyboardProjectTile key={k.id} keyboard={k} />
          )}
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
