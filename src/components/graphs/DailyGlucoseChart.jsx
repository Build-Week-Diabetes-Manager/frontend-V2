import React, { useRef, useEffect, useState } from "react";
import "./DailyGlucoseChart.css";
import * as d3 from "d3";
import { select } from "d3";

export function DailyGlucoseChart() {
	const [data, setData] = useState([25, 23, 12, 25, ]);
	const width = "100vh",
		height = 1000;
	let margin = { top: 30, right: 0, bottom: 30, left: 40 };
	const svgRef = useRef(null);

	const color = "steelblue";

	let y = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d) => d.value)])
		.nice()
		.range([height - margin.bottom, margin.top]);

	let x = d3
		.scaleBand()
		.domain(d3.range(data.length))
		.range([margin.left, width - margin.right])
		.padding(0.1);

	let xAxis = (g) =>
		g.attr("transform", `translate(0,${height - margin.bottom})`).call(
			d3
				.axisBottom(x)
				.tickFormat((i) => data[i].name)
				.tickSizeOuter(0)
		);

	let yAxis = (g) =>
		g
			.attr("transform", `translate(${margin.left},0)`)
			.call(d3.axisLeft(y).ticks(null, data.format))
			.call((g) => g.select(".domain").remove())
			.call((g) =>
				g
					.append("text")
					.attr("x", -margin.left)
					.attr("y", 10)
					.attr("fill", "currentColor")
					.attr("text-anchor", "start")
					.text(data.y)
            );
            
	useEffect(() => {
		if (data && svgRef.current) {
			const svg = d3.select(svgRef.current);

			svg
				.append("g")
				.attr("fill", color)
				.selectAll("rect")
				.data(data)
				.join("rect")
				.attr("y", (d) => y(d.value))
				.attr("x", (d, i) => x(i))
				.attr("height", (d) => y(0) - y(d.value))
				.attr("width", x.bandwidth())
			svg.append("g").call(xAxis);

			svg.append("g").call(yAxis);
		}
	}, [data]);

	return (
		<div className="dsg_container">
			<svg ref={svgRef} width={500} className="s3_graph"></svg>
			<br />
			<button onClick={() => setData(data.push((value) => value + 5))}>
				Update data
			</button>
			<button onClick={() => setData(data.filter((value) => value < 35))}>
				Filter Data
			</button>
		</div>
	);
}
