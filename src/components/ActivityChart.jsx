import React, { useEffect, useState } from 'react'
import dataMock from '../utils/dataMockActivity.js'
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts'

export default function ActivityChart({ id }) {

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
                setError('Failed to fetch activity data.');
                console.error('Error fetching activity data:', err);
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

    const sessionsWithIndex = data.data.sessions.map((session, index) => ({
        ...session,
        index: index + 1
    }))

    return (
        <>
            <h2 className='chart-title'>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
                <div style={{ backgroundColor: "#FBFBFB", padding: "70px 20px 30px", borderRadius: "10px" }}>
                    <BarChart width={600} height={180} data={sessionsWithIndex}>
                        <CartesianGrid stroke="#DEDEDE" strokeDasharray={3} />
                        <XAxis tickLine={false} stroke="#DEDEDE" tick={{ stroke: "#9B9EAC", strokeWidth: 0.5 }} />
                        <YAxis yAxisId="left" orientation="left" hide />
                        <YAxis type="number" domain={["dataMin-2", "dataMax+2"]} yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{ fill: "#9B9EAC" }} />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000' }} />
                        <Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ top: '-45px' }} formatter={(value) => <span className="text-color-class">{value}</span>} />
                        <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize="7" radius={[10, 10, 0, 0]} />
                        <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" color="#74798C" fill="#E60000" barSize="7" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </div>
            </ResponsiveContainer>
        </>
    );
}
