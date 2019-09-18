import React from "react";
import "./css/style.css";
import "./css/settings.css";
import "./css/custom.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import * as english from "./utils/EnglishSiteContent.json";
import * as spanish from "./utils/SpanishSiteContent.json";

function App() {
  const [values, setValues] = React.useState({
    language: "English"
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div className='site-wrapper'>
      <NavBar
        values={values}
        handleChange={handleChange}
        english={english.default}
        spanish={spanish.default}
      />
      <Hero
        values={values}
        english={english.default}
        spanish={spanish.default}
      />
      <About
        values={values}
        english={english.default}
        spanish={spanish.default}
      />
      <Footer
        english={english.default}
        spanish={spanish.default}
        values={values}
      />
    </div>
  );
}

export default App;
