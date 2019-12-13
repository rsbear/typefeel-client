import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import { useUserDashboardQuery } from "generated/graphql";

import css from "@emotion/css";
import { text } from "styles/text";
import AccountPageNavigation from "components/shared/AccountPageNavigation";
import { useRouter } from "next/router";

const Dashboard: FC<any> = ({ authUser }) => {
  const router = useRouter();
  const { loading, error, data } = useUserDashboardQuery();

  return (
    <Layout title="Dashboard" authUser={authUser}>
      {loading && <h1>Loading...</h1>}
      {error && <h2>Oops, something went wrong.</h2>}
      {!loading && data && data.me && (
        <div>
          <AccountPageNavigation username={authUser.username} router={router} />
          <div>
            <h2>Follows</h2>
            {data.me.follows.map((f: any) => (
              <div key={f.id}>
                {f.keyboard && <h5>{f.keyboard.name}</h5>}
                {f.keyset && <h5>{f.keyset.name}</h5>}
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;

const accountNav = css`
  margin-top: 20px;
  display: flex;

  li {
    margin-right: 15px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
`;
