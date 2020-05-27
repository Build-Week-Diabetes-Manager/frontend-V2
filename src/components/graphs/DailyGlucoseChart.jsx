import React, { useRef, useEffect, useState } from "react";
import "./DailyGlucoseChart.css";
import { select, axisBottom, scaleLinear, axisRight, scaleBand } from "d3";

export function DailyGlucoseChart() {
	const [data, setData] = useState([25, 23, 12, 25, 35, 75, 31, 5]);
	const [inputNum, setInputNum] = useState();
	const svgRef = useRef(null);

	useEffect(() => {
		const minXScaleRange = 0;

		const svg = select(svgRef.current);
		const xScale = scaleBand()
			.domain(data.map((value, index) => index))
			.range([minXScaleRange, 500])
			.padding(0.4);

		const yScale = scaleLinear().domain([0, 100]).range([150, 0]).clamp(true);

		const colorScale = scaleLinear()
			.domain([30, 50, 100])
			.range(["steelblue", "yellow", "red"])
			.clamp(true);
		const xAxis = axisBottom(xScale).ticks(data.length);

		svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

		const yAxis = axisRight(yScale);
		svg.select(".y-axis").style("transform", "translateX(500px)").call(yAxis);

		svg
			.selectAll(".bar")
			.data(data)
			.join("rect")
			.attr("class", "bar")
			.style("transform", "scale(1, -1)")
			.attr("x", (value, index) => xScale(index))
			.attr("y", -150)
			.attr("width", xScale.bandwidth())
			.on("mouseenter", (value, index) => {
				svg
					.selectAll(".tooltip")
					.data([value])
					.join("text")
					.attr("class", "tooltip")
					.text(value)
					.attr("x", xScale(index))
					.attr("y", yScale(value) - 5)
					.transition()
					.attr("opacity", 1);
			})
			.on("mouseleave", () => svg.select(".tooltip").remove())
			.transition()
			.attr("height", (value) => 150 - yScale(value))
			.attr("fill", colorScale);
	}, [data]);

	const addNumber = (e) => {
		e.preventDefault();
		setData([...data, inputNum]);
	};
	
	return (
		<div className="dsg_container">
			<svg ref={svgRef} width={500} className="s3_graph">
				<g className="x-axis" />
				<g className="y-axis" />
			</svg>
			<br/>
			<button onClick={() => setData(data.map((value) => value + 5))}>
				Update data
			</button>
			{/* <br />
			<button onClick={() => setData(data.filter((value) => value < 50))}>
				Filter Data
			</button> */}
<br/>
			<input
				type="number"
				placeholder="Add a number"
				value={inputNum}
				onChange={(e) => setInputNum(e.target.value)}
			/>
			<button onClick={addNumber}>Add value</button>
		</div>
	);
}
