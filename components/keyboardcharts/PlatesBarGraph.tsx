import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";

interface PlateData {
  plateType: string;
  count: number;
}

interface Props {
  id: string;
  platesData?: PlateData[];
}

const PlatesBarGraph: FC<Props> = ({ id, platesData }) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 860 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  useEffect(() => {
    const x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear().range([height, 0]);

    const svg = d3
      .select("#" + id)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(platesData.map(d => d.plateType));
    y.domain([0, d3.max(platesData, d => d.count)]);

    svg
      .selectAll("rect")
      .data(platesData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.plateType))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.count))
      .attr("height", d => height - y(d.count))
      .attr("fill", "pink");

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("font-weight", "bold")
      .style("font-size", "14px");

    // add the y Axis
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .style("font-weight", "bold")
      .style("font-size", "14px");

    svg
      .selectAll("line")
      .attr("class", "axisRed")
      .attr("stroke", "#fff");
  }, [platesData]);

  return (
    <div css={margins("40px 0 ")}>
      <div css={[flex.row]}>
        <h2 css={graphTitle}>Plates</h2>
        <svg css={bg} id={id} viewBox="0 0 960 500" />
      </div>
    </div>
  );
};

export default PlatesBarGraph;

const graphTitle = css`
  margin-right: 20px;
`;

const bg = css`
  path {
    stroke: ${colors.black10};
  }
`;
