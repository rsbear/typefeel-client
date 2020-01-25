import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";
import useBarGraph from "hooks/useBarGraph";
import useStackedBarChart from "hooks/useStackedBarChart";

interface PlateData {
  plateType: string;
  count: number;
}

interface Props {
  id: string;
  platesData?: PlateData[];
}

const PlatesBarGraph: FC<Props> = ({ id, platesData }) => {
  // useBarGraph(id, platesData);
  useStackedBarChart(id, platesData);

  return (
    <div css={[flex.column]}>
      <h2 css={graphTitle}>Plates</h2>
      <svg css={bg} id={id} viewBox="0 0 960 500" />
    </div>
  );
};

export default PlatesBarGraph;

const graphTitle = css`
  margin-right: 20px;
`;

const bg = css`
  path {
    /* stroke: ${colors.black10}; */
    stroke: transparent;
  }
`;
