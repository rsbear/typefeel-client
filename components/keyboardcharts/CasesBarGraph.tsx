import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";
import useBarGraph from "hooks/useBarGraph";

interface CaseData {
  caseType: string;
  count: number;
}

interface Props {
  id: string;
  caseData?: CaseData[];
}

const CasesBarGraph: FC<Props> = ({ id, caseData }) => {
  useBarGraph(id, caseData);

  return (
    <div css={margins("40px 0 ")}>
      <div css={[flex.row]}>
        <h2 css={graphTitle}>Cases</h2>
        <svg css={bg} id={id} viewBox="0 0 960 500" />
      </div>
    </div>
  );
};

export default CasesBarGraph;

const graphTitle = css`
  margin-right: 20px;
`;

const bg = css`
  path {
    stroke: ${colors.black10};
  }
`;
