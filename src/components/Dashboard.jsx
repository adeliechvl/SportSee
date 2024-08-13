import React from "react"

import user from '../data/user.json'
import activity from '../data/activity.json'
import sessions from '../data/sessions.json'
import performance from '../data/performance.json'

import UserInfos from '../components/UserInfos'
import FoodStats from '../components/FoodStats'
import ActivityChart from '../components/ActivityChart'
import SessionsChart from '../components/SessionsChart'
import PerformanceChart from '../components/PerformanceChart'
import ScoreChart from '../components/ScoreChart'

import caloriesImg from '../assets/caloriesIcon.svg'
import proteinesImg from '../assets/proteinsIcon.svg'
import carbsImg from '../assets/carbsIcon.svg'
import lipidsImg from '../assets/fatIcon.svg'

export default function Dashboard() {
    const firstName = user.user.userInfos.firstName
    let calories = user.user.keyData.calorieCount
    if (calories >= 1000) {
        const caloriesLength = calories.toString().length
        calories = calories.toString()
        const caloriesFirstPart = calories.substring(0, caloriesLength - 3)
        const caloriesLastPart = calories.substring(caloriesLength - 3, caloriesLength)
        calories = caloriesFirstPart + "," + caloriesLastPart
    }
    const proteines = user.user.keyData.proteinCount
    const carbs = user.user.keyData.carbohydrateCount
    const lipids = user.user.keyData.lipidCount

    const activitySessions = activity.data.sessions
    const durationSessions = sessions.data.sessions
    const performanceData = performance.data
    const score = user.user.todayScore

    return (
        <>
            <UserInfos name={firstName} />
            <div className="container-data">
                <section className="charts-container">
                    <div className="activity-chart">
                        <ActivityChart sessions={activitySessions} />
                    </div>
                    <div className="square-charts">
                        <div className="sessions-chart">
                            <SessionsChart sessions={durationSessions} />
                        </div>
                        <div className="performance-chart">
                            <PerformanceChart performance={performanceData} />
                        </div>
                        <div className="chart score-chart">
                            <p className="score-chart-title">Score</p>
                            <ScoreChart score={score} /></div>
                    </div>
                </section>
                <section className="food-stats">
                    <FoodStats img={caloriesImg} alt="Calories icon" stat={calories} title="Calories" unit="kCal" />
                    <FoodStats img={proteinesImg} alt="Proteines icon" stat={proteines} title="Protéines" unit="g" />
                    <FoodStats img={carbsImg} alt="Carbs icon" stat={carbs} title="Glucides" unit="g" />
                    <FoodStats img={lipidsImg} alt="Lipids icon" stat={lipids} title="Lipides" unit="g" />
                </section>
            </div>
        </>
    )
}