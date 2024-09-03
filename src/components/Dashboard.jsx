import { useParams } from 'react-router-dom'

import UserInfos from './UserInfos'
import FoodStats from './FoodStats'
import ActivityChart from './ActivityChart'
import SessionsChart from './SessionsChart'
import PerformanceChart from './PerformanceChart'
import ScoreChart from './ScoreChart'

export default function Dashboard() {

    const { id } = useParams()
    
    return (
        <>
            <UserInfos id={id} />
            <div className="container-data">
                <section className="charts-container">
                    <div className="activity-chart">
                        <ActivityChart id={id} />
                    </div>
                    <div className="square-charts">
                        <div className="sessions-chart">
                            <SessionsChart id={id} />
                        </div>
                        <div className="performance-chart">
                            <PerformanceChart id={id} />
                        </div>
                        <div className="chart score-chart">
                            <p className="score-chart-title">Score</p>
                            <ScoreChart id={id} />
                        </div>
                    </div>
                </section>
                <section className="food-stats">
                    <FoodStats id={id} />
                </section>
            </div>
        </>
    )
}