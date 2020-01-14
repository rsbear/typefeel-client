import React, { useState, useEffect } from "react";
import { GetProps } from "interfaces/GetProps";
import Layout from "components/layouts/Layout";
import { useKeyboardDataQuery } from "generated/graphql";
import { text } from "styles/text";
import BarChart from "components/BarChart";

const KeyboardData: GetProps<any> = ({ authUser, shortId }) => {
  const [totalJoins, setTotalJoins] = useState("");
  const [graphCases, setGraphCases] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const { loading, error, data } = useKeyboardDataQuery({
    variables: { shortId }
  });

  useEffect(() => {
    if (!loading && !error) {
      let total = JSON.stringify(data.keyboard.joins.length);
      setTotalJoins(total);

      const { cases } = data.keyboard.editions[0];
      const casesAvailable = cases.map((c: string) => c);
      setGraphCases(casesAvailable);

      const arr = [];
      const { joins } = data.keyboard;
      for (let c of casesAvailable) {
        for (let j of joins) {
          if (j.caseChoice === c) {
            arr.push(j.caseChoice);
          }
        }
      }

      const map = arr.reduce(
        (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
        new Map()
      );
      setGraphData([...map.values()]);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && !error) {
    }
  }, [loading]);

  const dynamicNav = {
    name: !loading ? data.keyboard.name : "",
    productType: "keyboard",
    shortId: shortId
  };

  return (
    <Layout title="Data" authUser={authUser} dynamicNav={dynamicNav}>
      {loading && <h2 />}
      {!loading && !error && data && data.keyboard && (
        <div>
          <h1 css={text.heading}>{data.keyboard.name}</h1>
          <h2>
            {data.keyboard.joins.length > 0
              ? `${totalJoins} supporters`
              : "Be the first to show your support"}
          </h2>
          <BarChart id="barchart" data={graphData} graphCases={graphCases} />
        </div>
      )}
    </Layout>
  );
};

KeyboardData.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default KeyboardData;
