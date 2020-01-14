import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";

interface Props {
  id: string;
  data: any;
  graphCases?: string[];
}

const BarChart: FC<any> = ({ id, data, graphCases }) => {
  const width = 550;
  const height = 180;

  console.log(data);
  useEffect(() => {
    const svg = d3
      .select("#" + id)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("margin-left", 100);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 90)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("margin-right", 20)
      .attr("fill", "pink");
  }, [data]);

  return (
    <div css={margins("40px 0 ")}>
      <div css={[flex.row]}>
        <h2 css={graphTitle}>Cases</h2>
        <div>
          <div css={bg} id={id} />
          <div css={[flex.row]}>
            {graphCases.map((c: string, i: number) => (
              <div key={i}>
                <h5 css={graphTitle}>{c}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;

const graphTitle = css`
  margin-right: 20px;
`;

const bg = css`
  padding-left: 5px;
  border-left: solid 1px ${colors.black10};
  border-bottom: solid 1px ${colors.black10};
`;
