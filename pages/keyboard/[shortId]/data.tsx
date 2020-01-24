import React, { useState, useEffect } from "react";
import { GetProps } from "interfaces/GetProps";
import Layout from "components/layouts/Layout";
import { useKeyboardDataQuery } from "generated/graphql";
import { text } from "styles/text";
import CasesBarGraph from "components/keyboardcharts/CasesBarGraph";
import PlatesBarGraph from "components/keyboardcharts/PlatesBarGraph";
import LayoutsBarGraph from "components/keyboardcharts/LayoutsBarGraph";

const KeyboardData: GetProps<any> = ({ authUser, shortId }) => {
  const [totalJoins, setTotalJoins] = useState("");
  const [caseData, setCaseData] = useState([]);
  const [platesData, setPlatesData] = useState([]);
  const [layoutsData, setLayoutsData] = useState([]);
  const [editionsData, setEditionsData] = useState([]);

  const { loading, error, data } = useKeyboardDataQuery({
    variables: { shortId }
  });

  useEffect(() => {
    if (!loading && !error) {
      let total = JSON.stringify(data.keyboard.joins.length);
      setTotalJoins(total);

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
        objArr.push({ name: k[0], count: k[1] });
      });

      setCaseData(objArr);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && !error) {
      // collect all case joins and put into arr
      // ["Alu", "PC", "Alu", "Brass", "Brass"]
      const arr = [];
      const { joins } = data.keyboard;
      for (let j of joins) {
        arr.push(j.plateChoice);
      }

      const res = {};
      const objArr = [];
      arr.forEach(v => {
        res[v] = (res[v] || 0) + 1;
      });

      Object.entries(res).forEach(k => {
        objArr.push({ name: k[0], count: k[1] });
      });

      setPlatesData(objArr);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && !error) {
      let total = JSON.stringify(data.keyboard.joins.length);
      setTotalJoins(total);

      // collect all case joins and put into arr
      // ["Alu", "PC", "Alu", "Brass", "Brass"]
      const arr = [];
      const { joins } = data.keyboard;
      for (let j of joins) {
        arr.push(j.layoutChoice);
      }

      const res = {};
      const objArr = [];
      arr.forEach(v => {
        res[v] = (res[v] || 0) + 1;
      });

      Object.entries(res).forEach(k => {
        objArr.push({ name: k[0], count: k[1] });
      });

      setLayoutsData(objArr);
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
