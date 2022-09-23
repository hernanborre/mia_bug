import "./App.css";
import {Link, useHref} from "react-router-dom";

function App() {
  let href = useHref("https://www.google.com.ar");
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link
          to={href}
          target="_blank"
          reloadDocument
          rel="noopener noreferrer"
        >
          Google
        </Link>
      </nav>
    </div>
  );
}

export default App;
