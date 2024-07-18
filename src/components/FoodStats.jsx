import caloriesImg from '../assets/caloriesIcon.svg'
import proteinesImg from '../assets/proteinsIcon.svg'
import carbsImg from '../assets/carbsIcon.svg'
import lipidsImg from '../assets/fatIcon.svg'

export default function Foodstats(props) {
    return (
        <div className="food-stats">
            <div className="calories stats-block">
                <img src={caloriesImg} alt="Calories icon"></img>
                <div className="stats-data">
                    <p className="calories-data food-data">{props.calories}kCal</p>
                    <p className="calories-title food-title">Calories</p>
                </div>
            </div>
            <div className="proteines stats-block">
                <img src={proteinesImg} alt="Proteines icon"></img>
                <div className="stats-data">
                    <p className="proteines-data food-data">{props.proteines}g</p>
                    <p className="proteines-title food-title">Proteines</p>
                </div>
            </div>
            <div className="carbs stats-block">
                <img src={carbsImg} alt="Carbs icon"></img>
                <div className="stats-data">
                    <p className="carbs-data food-data">{props.carbs}g</p>
                    <p className="carbs-title food-title">Glucides</p>
                </div>
            </div>
            <div className="lipids stats-block">
                <img src={lipidsImg} alt="Lipids icon"></img>
                <div className="stats-data">
                    <p className="lipids-data food-data">{props.lipids}g</p>
                    <p className="lipids-title food-title">Lipides</p>
                </div>
            </div>
        </div>
    )
}