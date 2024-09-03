import React, { useEffect, useState } from 'react'
import dataMock from '../utils/dataMockPerformance.js'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts"

export default function PerformanceChart({ id }) {

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
                setError('Failed to fetch performance data.');
                console.error('Error fetching performance data:', err);
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

    let newDataArray = []
    for (const property in data.data.data) {
        newDataArray.push({
            kind: data.data.translatedKinds[data.data.data[property].kind],
            value: data.data.data[property].value,
        })
    }

    return (
        <div style={{ width: 200, height: 200 }}>
            <RadarChart
                cx={95}
                cy={100}
                outerRadius={55}
                width={200}
                height={200}
                data={newDataArray}
                style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" stroke="#FFF" tickLine={false} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </div>
    );
}