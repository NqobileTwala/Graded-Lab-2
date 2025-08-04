import "./ProfileCard.css";

function ProfileCard(props) {
    return(
        <div className="card">
            <img src={props.image} alt="profile" className="profile-pic"/>
            <h2>{props.name}</h2>
            <h4>{props.title}</h4>
            <p>{props.bio}</p>
            <h5>Connect with us:</h5>
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </a>
        </div>
    );
}

export default ProfileCard;