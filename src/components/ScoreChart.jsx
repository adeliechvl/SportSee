import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  CartesianGrid
} from "recharts";

export default function ScoreChart(props) {
  const score = props.score * 100
  const dataGraph = [
    {
      score: score,
      fill: "#FF0000"
    }
  ]

  return (
    <>
      <div className="score-chart-inside">
        <p className="score-chart-text">
          <span className="score-span">{score}%</span>
          <br />
          de votre objectif
        </p>
      </div>

      
      <RadialBarChart
        width={190}
        height={190}
        innerRadius={"68%"}
        outerRadius={"80%"}
        barSize={10}
        data={dataGraph}
        startAngle={90}
        endAngle={360}
      >
        <CartesianGrid fill="#FBFBFB" />
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          fill="#FBFBFB"
          dataKey="score"
          corderRadius={5}
          clockWise={false}
          cornerRadius={100}
          stroke-linejoin="round"
        />
      </RadialBarChart>
    </>
  );
}