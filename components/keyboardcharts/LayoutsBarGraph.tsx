import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex, colors, margins } from "styles/main";
import { css } from "@emotion/core";
import useBarGraph from "hooks/useBarGraph";

interface LayoutData {
  layoutType: string;
  count: number;
}

interface Props {
  id: string;
  layoutsData?: LayoutData[];
}

const LayoutsBarGraph: FC<Props> = ({ id, layoutsData }) => {
  useBarGraph(id, layoutsData);
  // const margin = { top: 20, right: 20, bottom: 30, left: 40 },
  //   width = 860 - margin.left - margin.right,
  //   height = 500 - margin.top - margin.bottom;

  // useEffect(() => {
  //   const x = d3
  //     .scaleBand()
  //     .range([0, width])
  //     .padding(0.1);

  //   const y = d3.scaleLinear().range([height, 0]);
  //   const colors = [
  //     "#FFAACD",
  //     "#9CF1FC",
  //     "#FFE28E",
  //     "#9CFCDA",
  //     "#E1C9FC",
  //     "#073B4C",
  //     "#118AB2",
  //     "#EF476F"
  //   ];
  //   const color = () => colors[Math.floor(Math.random() * colors.length)];

  //   const svg = d3
  //     .select("#" + id)
  //     .append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //     .append("g")
  //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //   x.domain(layoutsData.map(d => d.layoutType));
  //   y.domain([0, d3.max(layoutsData, d => d.count)]);

  //   svg
  //     .selectAll("rect")
  //     .data(layoutsData)
  //     .enter()
  //     .append("rect")
  //     .attr("class", "bar")
  //     .attr("x", d => x(d.layoutType))
  //     .attr("width", x.bandwidth())
  //     .attr("y", d => y(d.count))
  //     .attr("height", d => height - y(d.count))
  //     .attr("fill", () => color());

  //   // add the x Axis
  //   svg
  //     .append("g")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(d3.axisBottom(x))
  //     .style("font-weight", "bold")
  //     .style("font-size", "14px");

  //   // add the y Axis
  //   svg
  //     .append("g")
  //     .call(d3.axisLeft(y))
  //     .style("font-weight", "bold")
  //     .style("font-size", "14px");

  //   // svg
  //   //   .selectAll("line")
  //   //   .attr("stroke", "#fff");
  // }, [layoutsData]);

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
    stroke: ${colors.black10};
  }
`;
