import Lorem from "../components/Lorem";
import Cube from "../components/three/Cube";

function About() {
  return (
    <>
      <div>
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
      <Lorem lorems={10}/>

    </>
  );
}

export default About;