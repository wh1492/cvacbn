import React, { useState, useEffect } from "react";
import Loader from "./components/commons/loader";
import Header from "./components/header/header";
import Socials from "./components/socials/socials";
import Content from "./components/content/content";
import Skills from "./components/skills/skills";
import Repositories from "./components/repositories/repositories";

import './App.scss'

const App = () => {
  const [cvInfo, setcvInfo] = useState({});
  const [loading, setLoading] = useState(true)

  const fetchPost = async () => {
    const response = await fetch(
      "http://cvwordpress.test/wp-json/cv/v1"
    );
    const data = await response.json();
    setcvInfo(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchPost();
  }, []);
  // const nombre = cvInfo.nombre
  const socials = cvInfo.social
  const experiencies = cvInfo.experiencies
  const studies = cvInfo.studies
  const languages = cvInfo.languages
  const skills = cvInfo.skills
  const repositories = cvInfo.repositories
  const portafolio = cvInfo.portafolio

  if (loading) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="App">
        <Header name={cvInfo.name} picture={cvInfo.picture} description={cvInfo.description} carrer={cvInfo.carrer} />
        <Socials socials={socials} />
        <div className="container ">
          <div className="row">
            <div className="col-md-7">
              {/* listado para experiencia laboral */}
              <Content name={experiencies.name} posts={experiencies.posts} />
              {/* listado para estudios realizados */}
              <Content name={studies.name} posts={studies.posts} />
            </div>
            <div className="col-md-5">
              <Skills name={skills.name} posts={skills.posts} />
              <Repositories name={repositories.name} posts={repositories.posts} />
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default App;
