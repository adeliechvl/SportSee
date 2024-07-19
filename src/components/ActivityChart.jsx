import React from "react";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from 'recharts'

export default function ActivityChart(props) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-activity">
                    <p className="tooltip-kilo">{`${payload[0].value}kg`}</p>
                    <p className="tooltip-calories">{`${payload[1].value}kCal`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <BarChart width={835} height={320}data={props.sessions} margin={{ top: 80, right: 29, left: 32, bottom: 23,}}>
            <CartesianGrid stroke="#DEDEDE" strokeDasharray={3} />
            <XAxis tickLine={false} stroke="#DEDEDE" tick={{ fill: "#9B9EAC" }} />
            <YAxis yAxisId="left" orientation="left" hide/>
            <YAxis type="number" domain={["dataMin-2", "dataMax+2"]} yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{fill: "#9B9EAC"}} />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000' }} />
            <Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ top: '50px' }} />
            <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize="5" radius={[10, 10, 0, 0]} />
            <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize="5" radius={[10, 10, 0, 0]} />
        </BarChart>
    );
}
