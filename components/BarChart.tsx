import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";

interface Props {
  id: string;
  data: any;
  graphCases?: string[];
  caseData?: any;
}

const BarChart: FC<any> = ({ id, caseData }) => {
  // const width = 550;
  // const height = 180;
  var margin = { top: 20, right: 20, bottom: 40, left: 40 },
    width = 860 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3
      .select("#" + id)
      .append("svg")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const xScale = d3
      .scaleBand()
      .domain(caseData.map(d => d.caseType))
      .rangeRound([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .rangeRound([height, 20]);

    // add x-axis
    svg
      .append("g")
      .attr("class", "axis axis-x")
      .attr("transform", "translate(0," + height + ")")
      // .style("border", "yellow 5px solid")
      .style("font-weight", "bold")
      .style("font-size", "14px")
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg
      .append("g")
      .attr("class", "axis axis-y")
      .call(d3.axisLeft(yScale).ticks(10));

    svg
      .selectAll("rect")
      .data(caseData)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.caseType))
      .attr("y", d => yScale(d.count))
      .attr("width", () => xScale.bandwidth())
      .attr("height", (d, i) => yScale(d.count))
      .style("bottom", "0")
      .style("position", "absolute")
      // .attr("transform", "scale(" + 0 + ",  " + 0 + ")")
      // .attr("x", (d, i) => i * 90)
      // .attr("y", (d, i) => height - 4 * d)
      // .attr("width", 65)
      // .attr("height", (d, i) => d * 10)

      .attr("fill", "pink");
  }, [caseData]);

  return (
    <div css={margins("40px 0 ")}>
      <div css={[flex.row]}>
        <h2 css={graphTitle}>Cases</h2>
        <div css={graphWrapper}>
          <svg css={bg} id={id} viewBox="0 0 960 500" />
          {/* <div css={[flex.row]}>
            {graphCases.map((c: string, i: number) => (
              <div key={i}>
                <h5 css={graphTitle}>{c}</h5>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BarChart;

const graphWrapper = css`
  position: relative;

  svg {
    rect {
      position: absolute;
      top: 0;
    }
  }
`;

const graphTitle = css`
  margin-right: 20px;
`;

const bg = css`
  /* padding-left: 5px;
  border-left: solid 1px ${colors.black10};
  border-bottom: solid 1px ${colors.black10}; */
`;
