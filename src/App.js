import React, { Suspense } from "react";
import "./css/style.css";
import "./css/settings.css";
import "./css/custom.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Alert from "./components/Alert";
import Loader from "./components/Loader";
import * as english from "./utils/EnglishSiteContent.json";
import * as spanish from "./utils/SpanishSiteContent.json";

const About = React.lazy(() => import("./components/About"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const [values, setValues] = React.useState({
    language: "English"
  });
  const [ie, setIE] = React.useState(false);

  React.useEffect(() => {
    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;

    if (isIE) {
      setIE(true);
    }
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  if (!ie) {
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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </div>
    );
  } else {
    return <Alert />;
  }
}

export default App;
