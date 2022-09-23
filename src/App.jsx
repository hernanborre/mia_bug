import "./App.css";
import {Link, useHref} from "react-router-dom";

function App() {
  //let href = useHref("https://www.google.com.ar");
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="/redirect">
          Yahoo router redirect
        </Link>
        {" "}|{" "}
        <Link onClick={external}>
          Google Link
        </Link>
        {" "}|{" "}
        <a href="http://google.com" target='_blank'>Google anchor</a>
      </nav>
    </div>
  );
}

const external = () => {
  window.location.href = "http://google.com/";
}
//https://github.com/remix-run/react-router/discussions/8611 
//solo se debería usar Link cuando queres que sea linkeado adentro de tu app

const Redirect = ( props ) => {
  const { url } = props
  return <h5>Redirecting...</h5>;
};


export default App;
