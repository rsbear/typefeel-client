import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";
import useBarGraph from "hooks/useBarGraph";
import useStackedBarChart from "hooks/useStackedBarChart";

interface LayoutData {
  layoutType: string;
  count: number;
}

interface Props {
  id: string;
  layoutsData?: LayoutData[];
}

const LayoutsBarGraph: FC<Props> = ({ id, layoutsData }) => {
  // useBarGraph(id, layoutsData);
  useStackedBarChart(id, layoutsData);
  return (
    <div css={margins("40px 0 ")}>
      <div css={[flex.row]}>
        <h2 css={graphTitle}>Layouts</h2>
        <svg css={bg} id={id} viewBox="0 0 960 500" />
      </div>
    </div>
  );
};

export default LayoutsBarGraph;

const graphTitle = css`
  margin-right: 20px;
`;

const bg = css`
  path {
    /* stroke: ${colors.black10}; */
    stroke: transparent;
  }
`;
