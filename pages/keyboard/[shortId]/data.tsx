import React, { useState, useEffect } from "react";
import { GetProps } from "interfaces/GetProps";
import Layout from "components/layouts/Layout";
import { useKeyboardDataQuery } from "generated/graphql";
import { text } from "styles/text";
import CasesBarGraph from "components/keyboardcharts/CasesBarGraph";
import PlatesBarGraph from "components/keyboardcharts/PlatesBarGraph";
import LayoutsBarGraph from "components/keyboardcharts/LayoutsBarGraph";
import { useAppContext } from "hooks/useAppContext";

const KeyboardData: GetProps<any> = ({ shortId }) => {
  const { authUser } = useAppContext();
  const [totalJoins, setTotalJoins] = useState("");
  const [caseData, setCaseData] = useState([]);
  const [platesData, setPlatesData] = useState([]);
  const [layoutsData, setLayoutsData] = useState([]);
  const [editionsData, setEditionsData] = useState([]);

  const { loading, error, data } = useKeyboardDataQuery({
    variables: { shortId }
  });

  useEffect(() => {
    if (!loading && !error && data) {
      const casesArr = [];
      const platesArr = [];
      const layoutsArr = [];

      for (let j of data.keyboard.joins) {
        casesArr.push(j.caseChoice);
        platesArr.push(j.plateChoice);
        layoutsArr.push(j.layoutChoice);
      }

      const casesRes = {};
      const platesRes = {};
      const layoutsRes = {};

      casesArr.forEach(x => {
        casesRes[x] = (casesRes[x] || 0) + 1;
      });
      platesArr.forEach(x => {
        platesRes[x] = (platesRes[x] || 0) + 1;
      });
      layoutsArr.forEach(x => {
        layoutsRes[x] = (layoutsRes[x] || 0) + 1;
      });

      const countedCasesArr = [];
      const countedPlatesArr = [];
      const countedLayoutsArr = [];

      Object.entries(casesRes).forEach(k => {
        countedCasesArr.push({ name: k[0], count: k[1] });
      });
      Object.entries(platesRes).forEach(k => {
        countedPlatesArr.push({ name: k[0], count: k[1] });
      });
      Object.entries(layoutsRes).forEach(k => {
        countedLayoutsArr.push({ name: k[0], count: k[1] });
      });

      setCaseData(countedCasesArr);
      setPlatesData(countedPlatesArr);
      setLayoutsData(countedLayoutsArr);
    }
  }, [loading]);

  const dynamicNav = {
    name: !loading ? data.keyboard.name : "",
    productType: "keyboard",
    shortId: shortId
  };

  return (
    <Layout title="Data" dynamicNav={dynamicNav}>
      {loading && <h2 />}
      {!loading && !error && data && data.keyboard && (
        <div>
          <h1 css={text.heading}>{data.keyboard.name}</h1>
          <h3>all data</h3>
          <h2>
            {data.keyboard.joins.length > 0
              ? `${totalJoins} supporters`
              : "Be the first to show your support"}
          </h2>
          <CasesBarGraph id="caseschart" caseData={caseData} />
          <PlatesBarGraph id="plateschart" platesData={platesData} />
          <LayoutsBarGraph id="layoutschart" layoutsData={layoutsData} />
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
