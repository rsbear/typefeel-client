import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import AccountPageNavigation from "components/shared/AccountPageNavigation";
import { useUserDashboardQuery, Keyboard } from "generated/graphql";

import css from "@emotion/css";
import { text } from "styles/text";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard: FC<any> = ({ authUser }) => {
  const router = useRouter();
  const { loading, error, data } = useUserDashboardQuery();

  React.useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [loading]);

  return (
    <Layout title="Dashboard - My Keysets" authUser={authUser}>
      {loading && <h1>Loading...</h1>}
      {error && <h2>Oops, something went wrong.</h2>}
      {!loading && data && data.me && (
        <div>
          <AccountPageNavigation username={data.me.username} router={router} />
          <h3>My keysets in interest check</h3>
          {data.me.keysets.map(
            (k: any) =>
              k.interestCheck && (
                <div key={k.id}>
                  <h3>{k.name}</h3>
                  <p>Join count: {JSON.stringify(k.joins.length)}</p>
                  <Link
                    href="/dashboard/update/keyset/[shortId]"
                    as={`/dashboard/update/keyset/${k.shortId}`}
                  >
                    <a>Update</a>
                  </Link>
                </div>
              )
          )}
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
