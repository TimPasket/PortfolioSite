import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello There!</h1>
      <div className="card">
        <h2>Stay tuned! An awesome site is in the making 😉</h2>
        <p>
          In the mean time, you can check out ongoing progress on GitHub or
          explore my LinkedIn profile
        </p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/tim-pasket/">
          <img src="/linkedIn-icon-better.png" alt="linkedInIcon" />
        </a>
        <a href="https://github.com/TimPasket">
          <img
            className="gitIcon"
            src="/github-icon-best.png"
            alt="githubIcon"
          />
        </a>
      </div>
    </>
  );
}

export default App;
