import React, { useEffect, useState } from 'react'
import dataMock from '../utils/dataMockScore.js'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  CartesianGrid
} from "recharts";

export default function ScoreChart({ id }) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await dataMock(id);
        setData(result);
      } catch (err) {
        setError('Failed to fetch score data.');
        console.error('Error fetching score data:', err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return null;
  }

  const score = data.newScore * 100
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
        width={200}
        height={200}
        innerRadius="68%"
        outerRadius="80%"
        barSize={10}
        data={dataGraph}
        startAngle={90}
        endAngle={450}
      >
        <CartesianGrid fill="#FBFBFB" />
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          fill="#FBFBFB"
          dataKey="score"
          corderRadius={10}
          clockWise
          cornerRadius={100}
          stroke-linejoin="round"
        />
      </RadialBarChart>
    </>
  );
}