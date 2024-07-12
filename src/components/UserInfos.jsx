export default function UserInfos(props) {

    return (
        <div className="user-welcome-message">
            <h1>Bonjour <span className="first-name">{props.name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}