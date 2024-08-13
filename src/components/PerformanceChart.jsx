import React from "react"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    CartesianGrid,
} from "recharts"

export default function PerformanceChart(props) {
    let newDataArray = []
    const data = props.performance.data
    data.map((element) =>
        newDataArray.push({
            "kind": props.performance.kind[element.kind],
            "value": element.value
        })
    )

    return (
        <RadarChart outerRadius={60} width={200} height={200} data={newDataArray} >
            <CartesianGrid fill="#282D30" />
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" stroke="#FFF" tickLine={false} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
    )
}