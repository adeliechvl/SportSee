import '../styles/food-stats.css'

export default function FoodStatsContainer(props) {
    
    return (
        <div className="food-stat">
            <img src={props.img} alt={props.alt}></img>
            <div className="stat-data">
                <p className="food-data">{props.stat}{props.unit}</p>
                <p className="food-title">{props.title}</p>
            </div>
        </div>
    )
}