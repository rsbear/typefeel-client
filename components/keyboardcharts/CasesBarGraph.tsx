import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";
import useBarGraph from "hooks/useBarGraph";
import useStackedBarChart from "hooks/useStackedBarChart";
import useHorizontalBarGraph from "hooks/useHorizontalBarGraph";

interface CaseData {
  caseType: string;
  count: number;
}

interface Props {
  id: string;
  caseData?: CaseData[];
}

const CasesBarGraph: FC<Props> = ({ id, caseData }) => {
  // useBarGraph(id, caseData);
  // useStackedBarChart(id, caseData);
  useHorizontalBarGraph(id, caseData);

  return (
    <div css={[flex.column]}>
      <h2 css={graphTitle}>Cases</h2>
      <svg css={bg} id={id} viewBox="0 0 960 500" />
    </div>
  );
};

export default CasesBarGraph;

const graphTitle = css`
  /* margin-right: 20px; */
  margin: 40px 0 0px 0;
`;

const bg = css`
  path {
    /* stroke: ${colors.black10}; */
    stroke: transparent;
  }
`;
