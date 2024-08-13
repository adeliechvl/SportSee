import * as React from "react";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function SessionsChart(props) {

    const days = ['','L', 'M', 'M', 'J', 'V', 'S', 'D', '']

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-sessions">
                    <p className="tooltip-duration">{`${payload[0].value} min`}</p>
                </div>
            )
        }
        return null
    }
    

    return (
        <>
            <h2 className='sessions-chart-title'>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <div style={{ background: "#FF0000", borderRadius: 5 }}>
                    <LineChart width={190} height={190} margin={{ top: 60, left:10, right: 20 }} data={props.sessions}>
                        <CartesianGrid fill="#FF0000" stroke="#FF0000" />
                        <Line type="monotone" dataKey="sessionLength" stroke="url(#lineColor)" activeDot={{ r: 3 }} dot={false} strokeWidth={2} />
                        <defs>
                            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="5%" stopColor="#ffffff67" />
                                <stop offset="95%" stopColor="#FFFFFF" />
                            </linearGradient>
                        </defs>
                        <XAxis tickFormatter={(tick) => days[tick]} stroke="#ffffff67" fontSize={12} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: "#ffffff" }} cursor={false} />
                       
                    </LineChart>
                </div>
            </ResponsiveContainer>
        </>
    )
}