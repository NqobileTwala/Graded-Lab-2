import "./profileCard.css";

function ProfileCard(props) {
    return(
        <div className="card">
            <img src={props.image} alt="profile" className="profile-pic"/>
            <h2>{props.name}</h2>
            <h4>{props.title}</h4>
            <p>{props.bio}</p>
        </div>
    );
}

export default ProfileCard;