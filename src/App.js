import ProfileCard from "./ProfileCard";
import profileimage from "./images/profile-image.jpg";
import UJlogo from "./images/UJ-logo.jpg";

function App() {
  return (
    <div>
      <h1>Profile Cards</h1>

      <ProfileCard
        image={UJlogo}
        name="University of Johannesburg"
        title="Education Partner"
        bio="A leading African university committed to innovation, research, and shaping future leaders."
        linkedin="https://www.linkedin.com/school/university-of-johannesburg/"
        
      />

      <ProfileCard
        image={profileimage}
        name="Nqobile Twala"
        title="Business Information Technology Student"
        bio="Passionate about technology and business. Exploring cloud computing, data, and innovative solutions."
        linkedin="https://www.linkedin.com/in/nqobile-twala/"
      />
    </div>
  );
}

export default App;
