import ProfileCard from "./profileCard";

function App() {
  return (
    <div>
      <h1>Our Team</h1>

      <ProfileCard
        image="https://picsum.photos/150"
        name="Bella Scotts"
        title="Software Developer"
        bio="bscotts@icloud.com"
      />

      <ProfileCard
        image="https://picsum.photos/150"
        name="Nqobile Twala"
        title="Frontend Developer"
        bio="nqobiletwala02@gmail.com"
      />
    </div>
  );
}

export default App;
