import React, { useState, useEffect } from "react";
import { GetProps } from "interfaces/GetProps";
import Layout from "components/layouts/Layout";
import { useKeyboardDataQuery } from "generated/graphql";
import { text } from "styles/text";
import BarChart from "components/BarChart";

const KeyboardData: GetProps<any> = ({ authUser, shortId }) => {
  const [totalJoins, setTotalJoins] = useState("");
  const [caseData, setCaseData] = useState([]);
  const [editionsData, setEditionsData] = useState([]);

  const { loading, error, data } = useKeyboardDataQuery({
    variables: { shortId }
  });

  useEffect(() => {
    if (!loading && !error) {
      let total = JSON.stringify(data.keyboard.joins.length);
      setTotalJoins(total);

      const editionsArr = [];
      const test = data.keyboard.editions.map(e => {
        editionsArr.push(e.name);
      });

      // collect all case joins and put into arr
      // ["Alu", "PC", "Alu", "Brass", "Brass"]
      const arr = [];
      const { joins } = data.keyboard;
      for (let j of joins) {
        arr.push(j.caseChoice);
      }

      const res = {};
      const objArr = [];
      arr.forEach(v => {
        res[v] = (res[v] || 0) + 1;
      });

      Object.entries(res).forEach(k => {
        objArr.push({ caseType: k[0], count: k[1] });
      });

      setCaseData(objArr);

      //DEPRECATED
      //totals arr looks like [ 2, 5 ]
      // const map = arr.reduce(
      //   (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      //   new Map()
      // );

      // setGraphData([...map.values()]);
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
          <BarChart
            id="barchart"
            caseData={caseData}
            editionsData={editionsData}
          />
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
