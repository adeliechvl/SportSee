import React, { useEffect, useState } from 'react'
import dataMock from '../utils/dataMockUserInfos.js'
import FoodStatsContainer from '../components/FoodStatsContainer'
import caloriesIcon from '../assets/caloriesIcon.svg'
import proteinesIcon from '../assets/proteinsIcon.svg'
import carbsIcon from '../assets/carbsIcon.svg'
import lipidsIcon from '../assets/fatIcon.svg'


export default function Foodstats(props) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await dataMock(props.id)
                setData(result)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getData()
    }, [props.id])

    if (loading) {
        return <div>Chargement</div>
    }

    if (error) {
        return <div>Erreur: {error.message}</div>
    }

    let calories = data.data.keyData.calorieCount
    if (calories >= 1000) {
        const caloriesLength = calories.toString().length
        calories = calories.toString()
        const caloriesFirstPart = calories.substring(0, caloriesLength - 3)
        const caloriesLastPart = calories.substring(
            caloriesLength - 3,
            caloriesLength,
        )
        calories = caloriesFirstPart + "," + caloriesLastPart
    }
    const proteines = data.data.keyData.proteinCount
    const carbs = data.data.keyData.carbohydrateCount
    const lipids = data.data.keyData.lipidCount

    return (
        <>
            <FoodStatsContainer
                img={caloriesIcon}
                alt="Calories icon"
                stat={calories}
                title="Calories"
                unit="kCal"
            />
            <FoodStatsContainer
                img={proteinesIcon}
                alt="Proteines icon"
                stat={proteines}
                title="Protéines"
                unit="g"
            />
            <FoodStatsContainer
                img={carbsIcon}
                alt="Carbs icon"
                stat={carbs}
                title="Glucides"
                unit="g"
            />
            <FoodStatsContainer
                img={lipidsIcon}
                alt="Lipids icon"
                stat={lipids}
                title="Lipides"
                unit="g"
            />
        </>
    )
}