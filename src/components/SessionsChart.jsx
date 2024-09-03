import React, { useEffect, useState } from 'react'
import dataMock from '../utils/dataMockSessions.js'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
} from "recharts";

export default function SessionsChart(props) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const result = await dataMock(props.id);
                setData(result);
            } catch (err) {
                setError('Failed to fetch sessions data.');
                console.error('Error fetching sessions data:', err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [props.id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!data) {
        return null;
    }

    const days = {
        0: '',
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
        8: '',
    }

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

    const CustomCursor = () => {
  
        return (
            <Rectangle
                fill="black"
                
                width={200}
                height={200}
            />
        )
    };

    let newArray = [...data.data.sessions]
    newArray.unshift({ day: 0, sessionLength: newArray[0].sessionLength })
    newArray.push({ day: 8, sessionLength: newArray[newArray.length - 1].sessionLength })

    return (
        <>
            <h2 className='sessions-chart-title'>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <div style={{ background: "#FF0000", borderRadius: 5 }}>
                    <LineChart width={200} height={200} margin={{ top: 60, left: 10, right: 20 }} data={newArray} >
                        <CartesianGrid />
                        <Line type="monotone" dataKey="sessionLength" stroke="url(#lineColor)" dot={false} strokeWidth={2} />
                        <defs>
                            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#ffffff67" />
                                <stop offset="100%" stopColor="#FFFFFF" />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="day" tickFormatter={(tick) => days[tick]} stroke="#ffffff67" fontSize={12} axisLine={false} tickLine={false} padding={{ left: -15, right: -20 }} />
                        <Tooltip content={<CustomTooltip />} cursor={CustomCursor} wrapperStyle={{ backgroundColor: "#ffffff" }}  />
                    </LineChart>
                </div>
            </ResponsiveContainer>
        </>
    )
}