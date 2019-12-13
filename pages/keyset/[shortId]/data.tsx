import React, { useState, useEffect } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import { useKeysetQuery } from "generated/graphql";
import { object } from "prop-types";
import { text, fontSize } from "styles/text";
import css from "@emotion/css";
import { colors } from "styles/main";
import PieChart from "components/shared/PieChart";
import * as d3 from "d3";

const KeysetData: GetProps<any> = ({ authUser, shortId }) => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [state, setState] = useState({});
  const [pie, setPie] = useState(generateData(5, 5));
  const { loading, error, data } = useKeysetQuery({ variables: { shortId } });

  const dynamicNav = {
    name: !loading ? data.keyset.profile + " " + data.keyset.name : "",
    shortId: shortId,
    productType: "keyset"
  };

  useEffect(() => {
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

      // setPie(generateData())

      setState((prevState: any) => {
        return { ...prevState, ...totals };
      });
    }
  }, [loading]);

  // const changeData = () => {
  //   setPie(generateData(5, 5));
  // };

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
            {Object.entries(state).map(([kit, total]: any, idx: number) => (
              <li key={idx}>
                {kit} kits {total},&nbsp;
              </li>
            ))}
          </ul>
          <PieChart
            data={pie}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
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
