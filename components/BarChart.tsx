import React, { FC, useEffect, useMemo } from "react";
import * as d3 from "d3";
import { flex } from "styles/main";

interface Props {
  id: string;
  data: any;
  graphCases?: string[];
}

const BarChart: FC<any> = ({ id, data, graphCases }) => {
  const width = 550;
  const height = 100;

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
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "pink");
  }, [data]);

  return (
    <div>
      <h2>Cases</h2>
      <div id={id} />
      <div css={[flex.row]}>
        {graphCases.map((c: string, i: number) => (
          <h5 key={i}>{c}</h5>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
