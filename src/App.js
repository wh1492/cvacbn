import React, { useState, useEffect } from "react";
import Header from "./components/header/header";

import './App.scss'

const App = () => {
  const [cvInfo, setcvInfo] = useState({});

  const fetchPost = async () => {
    const response = await fetch(
      "http://cvwordpress.test/wp-json/cv/v1"
    );
    const data = await response.json();
    setcvInfo(data);

  };

  useEffect(() => {
    fetchPost();
  }, []);
  // const nombre = cvInfo.nombre
  const experiencies = cvInfo.experiencies
  const studies = cvInfo.studies
  const languages = cvInfo.languages
  const skills = cvInfo.skills
  const repositories = cvInfo.repositories
  const portafolio = cvInfo.portafolio


  return (
    <div className="App">
      <Header name={cvInfo.name} picture={cvInfo.picture} description={cvInfo.description} carrer={cvInfo.carrer} />
      <pre>
        {
          JSON.stringify(cvInfo)
        }
      </pre>
    </div>
  );
}

export default App;
