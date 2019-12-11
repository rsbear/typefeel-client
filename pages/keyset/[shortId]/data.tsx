import React, { FC, useState, SetStateAction } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import { useKeysetQuery } from "generated/graphql";
import { object } from "prop-types";
import { text, fontSize } from "styles/text";
import css from "@emotion/css";
import { colors } from "styles/main";

// for creating the data
// loop through the kits on the keyset object
// loop through the joins then the kits on the keyset object

const KeysetData: GetProps<any> = ({ authUser, shortId }) => {
  const [state, setState]: SetStateAction<any> = useState({});
  const { loading, error, data } = useKeysetQuery({ variables: { shortId } });

  const dynamicNav = {
    name: !loading ? data.keyset.profile + " " + data.keyset.name : "",
    shortId: shortId,
    productType: "keyset"
  };

  React.useEffect(() => {
    if (!loading && data && data.keyset) {
      const { keyset } = data;
      const arr = [];
      const totals = {};

      for (let j of keyset.joins) {
        for (let k of j.kits) {
          arr.push(k);
        }
      }

      arr.forEach(i => {
        totals[i] = (totals[i] || 0) + 1;
      });

      setState((prevState: any) => {
        return { ...prevState, ...totals };
      });
    }
  }, [loading]);

  return (
    <Layout title="Keyset data" authUser={authUser} dynamicNav={dynamicNav}>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {!loading && !error && data && data.keyset && (
        <div>
          <h1 css={text.heading}>
            {data.keyset.profile} {data.keyset.name}
          </h1>
          <h2>TOTALS</h2>
          <ul css={totalsList}>
            {Object.entries(state).map(([kit, total]: any, kidx: number) => (
              <li key={kidx}>
                {kit} kits {total},&nbsp;
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

KeysetData.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default KeysetData;

const totalsList = css`
  display: flex;
  li {
    font-size: 2rem;
    font-weight: 600;
    color: ${colors.black50};
  }
`;
